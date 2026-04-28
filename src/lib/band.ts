import { Polity } from './polity';
import { Region } from './region';
import { bandVisual } from './visual';
import { chinaNames } from './nameGenerator';
import { Village } from './village';
import { ocean } from './climate';
import { NoPolity } from './noPolity';

export class Band extends Polity {
  constructor(
    public _region: Region,
    public _name: string,
    public _population: number,
    public _partOfMainArray: boolean
  ) {
    super();
    this.polityType = 'Band';
    this._hasMoved = false;
    this._settled = true;
    this.growthRate = 0.01;
    this._foodYielded = 0;
    this._foodStored = 0;
    this._farmingLevel = 1;
    this._visual = bandVisual;
    this._icons = Array(1).fill(0).map((_, i) => i);
  }

  bandSplit(regions: Region[], region: Region, population: number) {
    const newBand = new Band(region, chinaNames.popRandomName(), population, false);
    region._polity = newBand;
    region._polity.act(regions);
  }

  eat(regions: Region[]) {
    let hungryPeople = this._population - this._foodYielded;

    if (hungryPeople > 0) {
      if (this._foodStored >= hungryPeople) {
        this._foodStored -= hungryPeople;
        hungryPeople = 0;
      } else {
        hungryPeople -= this._foodStored;
        this._foodStored = 0;
      }
    }

    if (hungryPeople > 0) {
      const newRegionOptions = this.searchForFreeNeighboringRegions(regions, this._region);
      if (newRegionOptions.length > 0) {
        const minToMigrate = hungryPeople;
        const newBandSize = Math.floor(Math.random() * Math.floor(this._population / 2) + minToMigrate);
        const newRegion = this.findHighestYieldingRegion(newRegionOptions);
        this.bandSplit(regions, newRegion, newBandSize);
        this._population -= newBandSize;
      } else {
        this._population -= hungryPeople;
      }
    }

    this._foodYielded = 0;
  }

  firstMove(regions: Region[]) {
    const newRegionOptions = this.searchForFreeNeighboringRegions(regions, this._region);
    if (newRegionOptions.length < 1) {
      this.farm();
    } else {
      const newRegion = this.findHighestYieldingRegion(newRegionOptions);
      if (newRegion !== undefined && newRegion._foodYield >= this._region._foodYield) {
        this.migrate(this._region, newRegion, this);
      } else {
        this.farm();
      }
    }
  }

  secondMove(_regions: Region[]) {
    this.forage();
  }

  update() {
    const pop = this._population;
    if (pop < 50) this._icons = Array(1).fill(0).map((_, i) => i);
    else if (pop < 100) this._icons = Array(2).fill(0).map((_, i) => i);
    else if (pop < 150) this._icons = Array(3).fill(0).map((_, i) => i);
    else if (pop < 200) this._icons = Array(4).fill(0).map((_, i) => i);
    else if (pop < 250) this._icons = Array(5).fill(0).map((_, i) => i);
    else if (pop < 300) this._icons = Array(6).fill(0).map((_, i) => i);
    else if (pop < 350) this._icons = Array(7).fill(0).map((_, i) => i);
    else if (pop < 400) this._icons = Array(8).fill(0).map((_, i) => i);
    else if (pop < 450) this._icons = Array(9).fill(0).map((_, i) => i);
    else if (pop < 500) this._icons = Array(10).fill(0).map((_, i) => i);
    else if (pop < 550) this._icons = Array(11).fill(0).map((_, i) => i);
    else this._icons = Array(12).fill(0).map((_, i) => i);

    if (this._population >= 500 && this._farmingLevel >= 10 && this._region._riverConnections > 0) {
      const village = new Village(this, false);
      this._region._polity = village;
      this._region = new Region(0, 0, ocean, new NoPolity());
    }
  }

  act(regions: Region[]) {
    this.firstMove(regions);
    this.secondMove(regions);
    this.eat(regions);
    this.populationGrowth();
    this.update();
    this._hasMoved = true;
  }
}
