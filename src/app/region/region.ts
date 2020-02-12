import { Polity } from '../polity/polity';
import { Climate } from './climate';
import { NoPolity } from '../polity/noPolity';

export class Region {
  /* --------------------------------- */
  /* 1. CONSTRUCTOR AND PROPERTIES */
  /* --------------------------------- */
  public _settled:boolean;
  public _maxFoodYield:number;
  public _foodYield:number;
  public _foodYieldReplenish:number;
  public _farmingYield:number;

  public _borders:string[];



  public _climateType:string;
  constructor(private _id: string, public _climate:Climate, public _polity:Polity) {
    this._id = _id;
    this._polity = _polity;
    this._settled = this._polity._settled; //DOES THIS MAKE SENSE TO DO?
    this._maxFoodYield = _climate.naturalMaxFoodYield;
    this._foodYield = _climate.naturalMaxFoodYield;
    this._foodYieldReplenish = _climate.naturalFoodYieldReplenish;
    this._climateType = _climate.type;
    this._farmingYield = 0;
    this._borders = ['none', 'none', 'none', 'none'];
  }

  /* --------------------------------- */
  /* 2. GETTERS AND SETTERS */
  /* --------------------------------- */
  get id() { return this._id };
  set id(value) { this._id = value; };


  /* --------------------------------- */
  /* 3. METHODS FOR FOOD */
  /* --------------------------------- */

  replenishFood(){
    // 1. NATURAL GROWTH
    this._foodYield += this._foodYieldReplenish;
    if(this._foodYield > this._maxFoodYield) this._foodYield = this._maxFoodYield;

    //2. AGRICULTURAL GROWTH
    this._foodYield += this._farmingYield;
    this._farmingYield = 0; 
  }


}


