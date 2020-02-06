import { Polity, Band } from '../polity/polity';





export class Region {
  public _polity:Polity;
  public _settled:boolean;
  private _space: number;
  public _forageYield;
  public _farmYield;
  public _maxForageYield;
  public _maxFarmYield;
  public _tileColor:string;
  constructor(public _id: string) {
    this._id = _id;
    this._polity = new Polity();
    this._settled = this.checkIfSettled();
    this._forageYield = 0;
    this._farmYield = 0;
    this._maxForageYield = 0;
    this._maxFarmYield = 0;
    this._tileColor = "abstract";
  }

  //GETTERS AND SETTERS FOR PRIVATE PROPERTIES
  get id() { return this._id };
  set id(value) { this._id = value; };
  get space() { return this._space };
  set space(value) { this._space = value; };
  get maxForageYield() { return this._maxForageYield };
  set maxForageYield(value) { this._maxForageYield = value; };


  replenishFood(){
    this._forageYield += 0;
    this._farmYield += 0;
  }

  //CHECK IF SETTLED
  checkIfSettled(){
    return typeof this._polity === 'undefined' ? false: true;
  }

}


