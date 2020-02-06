import { Region } from '../region';



export class ContinentalClimate extends Region{
    constructor(public _id: string){
        super(_id);
        this._maxForageYield = 50;
        this._maxFarmYield = 500;
        this._forageYield = 50;
        this._farmYield = 500;
        this._tileColor = "continental";
    }
    replenishFood(){
        if(this._forageYield < this.maxForageYield) this._forageYield += 10;
        if(this._forageYield > this.maxForageYield) this._forageYield = this._maxForageYield;
        if(this._farmYield < this._farmYield) this._farmYield += 100;
        if(this._farmYield > this._farmYield) this._farmYield = this._maxFarmYield;
    }
}