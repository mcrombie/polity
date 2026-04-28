import { Polity } from './polity';
import { Region } from './region';
import { villageVisual } from './visual';
import { fertileCrescentNames } from './nameGenerator';
import { Band } from './band';
import { Town } from './town';
import { ocean } from './climate';
import { NoPolity } from './noPolity';

export class Village extends Polity {
  constructor(public _band: Band, public _partOfMainArray: boolean) {
    super();
    this._region = _band._region;
    this._name = _band._name;
    this.polityType = 'Village';
    this._hasMoved = _band._hasMoved;
    this._settled = true;
    this._population = _band._population;
    this.growthRate = 0.02;
    this._foodYielded = _band._foodYielded;
    this._foodStored = _band._foodStored;
    this._farmingLevel = 11;
    this._visual = villageVisual;
    this._partOfMainArray = _partOfMainArray;
    this._icons = Array(1).fill(0).map((_, i) => i);
  }

  bandSplit(regions: Region[], region: Region, population: number) {
    const newBand = new Band(region, fertileCrescentNames.popRandomName(), population, false);
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

  firstMove(_regions: Region[]) {
    this.farm();
  }

  secondMove(_regions: Region[]) {
    this.forage();
  }

  update(regions: Region[]) {
    const pop = this._population;
    if (pop < 500) this._icons = Array(1).fill(0).map((_, i) => i);
    else if (pop < 1000) this._icons = Array(2).fill(0).map((_, i) => i);
    else if (pop < 1500) this._icons = Array(3).fill(0).map((_, i) => i);
    else if (pop < 2000) this._icons = Array(4).fill(0).map((_, i) => i);
    else if (pop < 2500) this._icons = Array(5).fill(0).map((_, i) => i);
    else if (pop < 3000) this._icons = Array(6).fill(0).map((_, i) => i);
    else if (pop < 3500) this._icons = Array(7).fill(0).map((_, i) => i);
    else this._icons = Array(8).fill(0).map((_, i) => i);

    let neighboringVillages = 0;
    this.getNeighboringRegions(regions, this._region).forEach(nr => {
      if (nr._polity.polityType === 'Village') neighboringVillages++;
    });

    if (
      this._population >= 5000 &&
      this._farmingLevel >= 20 &&
      this._region._riverConnections > 0 &&
      neighboringVillages >= 2
    ) {
      const town = new Town(this, false);
      this._region._polity = town;
      this._region = new Region(0, 0, ocean, new NoPolity());
    }
  }

  act(regions: Region[]) {
    this.firstMove(regions);
    this.secondMove(regions);
    this.eat(regions);
    this.populationGrowth();
    this.update(regions);
    this._hasMoved = true;
  }
}
