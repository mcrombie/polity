import { Polity } from './polity';
import { Region } from './region';
import { townVisual } from './visual';
import { fertileCrescentNames } from './nameGenerator';
import { Band } from './band';
import { Village } from './village';

export class Town extends Polity {
  constructor(public _village: Village, public _partOfMainArray: boolean) {
    super();
    this._region = _village._region;
    this._name = _village._name;
    this.polityType = 'Town';
    this._hasMoved = _village._hasMoved;
    this._settled = true;
    this._population = _village._population;
    this.growthRate = 0.02;
    this._foodYielded = _village._foodYielded;
    this._foodStored = _village._foodStored;
    this._farmingLevel = 11;
    this._visual = townVisual;
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

  update() {
    const pop = this._population;
    if (pop < 5000) this._icons = Array(1).fill(0).map((_, i) => i);
    else if (pop < 10000) this._icons = Array(2).fill(0).map((_, i) => i);
    else if (pop < 15000) this._icons = Array(3).fill(0).map((_, i) => i);
    else if (pop < 20000) this._icons = Array(4).fill(0).map((_, i) => i);
    else if (pop < 25000) this._icons = Array(5).fill(0).map((_, i) => i);
    else if (pop < 30000) this._icons = Array(6).fill(0).map((_, i) => i);
    else if (pop < 35000) this._icons = Array(7).fill(0).map((_, i) => i);
    else this._icons = Array(8).fill(0).map((_, i) => i);
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
