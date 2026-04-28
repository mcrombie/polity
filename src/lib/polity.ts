import { Region } from './region';
import { Visual } from './visual';
import { shuffle } from './helper';

export class Polity {
  public _name?: string;
  private _polityType: string;
  public _region: Region;
  public _hasMoved: boolean;
  public _settled: boolean;
  public _partOfMainArray: boolean;
  public _population: number;
  private _growthRate: number;
  public _foodYielded: number;
  public _farmingYield: number;
  public _foodStored: number;
  public _foodStorageCapacity: number;
  public _farmingLevel: number;
  public _visual: Visual;
  public _selected: string;
  public _icons: number[];

  constructor() {
    this._name = '';
    this.polityType = 'None';
    this._hasMoved = false;
    this._settled = false;
    this._population = 0;
    this.growthRate = 0;
    this._foodYielded = 0;
    this._farmingYield = 0;
    this._foodStored = 0;
    this._foodStorageCapacity = 0;
    this._farmingLevel = 0;
    this._visual = new Visual('');
    this._partOfMainArray = false;
    this._selected = 'not-selected';
    this._icons = [];
  }

  get polityType() { return this._polityType; }
  set polityType(value) { this._polityType = value; }
  get growthRate() { return this._growthRate; }
  set growthRate(value) { this._growthRate = value; }

  getFlooredPopulation() {
    return Math.floor(this._population);
  }

  populationGrowth() {
    for (let i = 1; i <= this._population; i++) {
      if (Math.random() <= this._growthRate) this._population++;
    }
  }

  getNeighboringRegions(regions: Region[], region: Region): Region[] {
    const regionOptionIDs = [
      [region._col - 1, region._row - 1],
      [region._col - 1, region._row],
      [region._col - 1, region._row + 1],
      [region._col, region._row - 1],
      [region._col, region._row + 1],
      [region._col + 1, region._row - 1],
      [region._col + 1, region._row],
      [region._col + 1, region._row + 1],
    ];
    return regions.filter(nr =>
      regionOptionIDs.some(id => nr._id[0] === id[0] && nr._id[1] === id[1])
    );
  }

  searchForFreeNeighboringRegions(regions: Region[], region: Region): Region[] {
    const regionOptionIDs = [
      [region._col - 1, region._row - 1],
      [region._col - 1, region._row],
      [region._col - 1, region._row + 1],
      [region._col, region._row - 1],
      [region._col, region._row + 1],
      [region._col + 1, region._row - 1],
      [region._col + 1, region._row],
      [region._col + 1, region._row + 1],
    ];
    return regions.filter(pr =>
      regionOptionIDs.some(id =>
        pr._id[0] === id[0] && pr._id[1] === id[1] &&
        !pr._polity._settled && pr._climateType !== 'ocean'
      )
    );
  }

  findHighestYieldingRegion(regions: Region[]): Region {
    const shuffled: Region[] = shuffle([...regions]);
    let highestYield = 0;
    let chosen = shuffled[0];
    for (const r of shuffled) {
      if (r._foodYield > highestYield) {
        highestYield = r._foodYield;
        chosen = r;
      }
    }
    return chosen;
  }

  migrate(oldRegion: Region, newRegion: Region, polity: Polity) {
    oldRegion._polity = new Polity();
    newRegion._polity = polity;
    polity._region = newRegion;
  }

  foodStorage() {
    if (this._foodStored < this._foodStorageCapacity) {
      const space = this._foodStorageCapacity - this._foodStored;
      if (this._region._foodYield >= space) {
        this._foodStored += space;
        this._region._foodYield -= space;
      } else {
        this._foodStored += this._region._foodYield;
        this._region._foodYield = 0;
      }
    }
  }

  forage() {
    if (this._population <= this._region._foodYield) {
      this._foodYielded = this._population;
      this._region._foodYield -= this._foodYielded;
      this.foodStorage();
      if (this._foodStored > this._foodStorageCapacity) this._foodStored = this._foodStorageCapacity;
    } else {
      this._foodYielded = this._region._foodYield;
      this._region._foodYield -= this._foodYielded;
    }
  }

  farm() {
    const r = (Math.random() * (this._farmingLevel + this._region._riverConnections)) / 100;
    this._farmingYield = Math.floor(r * this._region._foodYieldReplenish * this._population);
    this.upgradeFarmingLevel();
    this._region._farmingYield = this._farmingYield;
  }

  upgradeFarmingLevel() {
    let newLevel = 1;
    if (this._farmingYield >= 1) newLevel = 2;
    if (this._farmingYield >= 2) newLevel = 3;
    if (this._farmingYield >= 4) newLevel = 4;
    if (this._farmingYield >= 8) newLevel = 5;
    if (this._farmingYield >= 16) newLevel = 6;
    if (this._farmingYield >= 32) newLevel = 7;
    if (this._farmingYield >= 64) newLevel = 8;
    if (this._farmingYield >= 128) newLevel = 9;
    if (this._farmingYield >= 256) newLevel = 10;
    if (this._farmingYield >= 1024) newLevel = 12;
    if (this._farmingYield >= 2048) newLevel = 13;
    if (this._farmingYield >= 4096) newLevel = 14;
    if (this._farmingYield >= 8192) newLevel = 20;
    if (this._farmingLevel < newLevel) this._farmingLevel = newLevel;
    this.upgradeFoodStorageCapacity();
  }

  upgradeFoodStorageCapacity() {
    const levels: Record<number, number> = {
      1: 0, 2: 1, 3: 5, 4: 10, 5: 20, 6: 35, 7: 55, 8: 80, 9: 110, 10: 250,
      11: 500, 12: 600, 13: 800, 14: 1000, 15: 1200, 16: 1400, 17: 1600,
      18: 1800, 19: 2000, 20: 2500
    };
    const cap = levels[this._farmingLevel] ?? (this._farmingLevel > 20 ? 2500 : 0);
    this._foodStorageCapacity = cap;
  }

  act(_regions: Region[]) {}
}
