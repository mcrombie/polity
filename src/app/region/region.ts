import { Polity, Band } from '../polity/polity';


const DEFAULT_SPACE: number = 10;
const DEFAULT_MAX_FORAGE_YIELD = 100;

export class Region {
  public _polity:Polity;
  public _settled:boolean;
  private _space: number;
  private _maxForageYield;
  constructor(public _id: string) {
    this._id = _id;
    this._polity = new Polity();
    this._settled = this.checkIfSettled();
    this._space = DEFAULT_SPACE;
    this._maxForageYield = DEFAULT_MAX_FORAGE_YIELD;
  }

  //GETTERS AND SETTERS FOR PRIVATE PROPERTIES
  get id() { return this._id };
  set id(value) { this._id = value; };
  get space() { return this._space };
  set space(value) { this._space = value; };
  get maxForageYield() { return this._maxForageYield };
  set maxForageYield(value) { this._maxForageYield = value; };

  //RESET SPACE
  resetSpace() {
    this.space = DEFAULT_SPACE;
  }

  //CHECK IF SETTLED
  checkIfSettled(){
    return typeof this._polity === 'undefined' ? false: true;
  }

}


