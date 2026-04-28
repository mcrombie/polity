import { Polity } from './polity';
import { Climate } from './climate';
import { NoPolity } from './noPolity';

export class Region {
  public _settled: boolean;
  public _maxFoodYield: number;
  public _foodYield: number;
  public _foodYieldReplenish: number;
  public _farmingYield: number;
  public _riverConnections: number;
  public _borders: string[];
  public _selected: string;
  private _id: number[];
  public _climateType: string;

  constructor(
    public _col: number,
    public _row: number,
    public _climate: Climate,
    public _polity: Polity,
    public _label?: string
  ) {
    this._id = [_col, _row];
    this._settled = _polity._settled;
    this._maxFoodYield = _climate.naturalMaxFoodYield;
    this._foodYield = _climate.naturalMaxFoodYield;
    this._foodYieldReplenish = _climate.naturalFoodYieldReplenish;
    this._climateType = _climate.type;
    this._farmingYield = 0;
    this._riverConnections = 0;
    this._borders = ['none', 'none', 'none', 'none'];
    this._selected = 'not-selected';
  }

  get id() { return this._id; }
  set id(value) { this._id = value; }

  replenishFood() {
    this._foodYield += this._foodYieldReplenish;
    if (this._foodYield > this._maxFoodYield) this._foodYield = this._maxFoodYield;
    this._foodYield += this._farmingYield;
    this._farmingYield = 0;
  }
}
