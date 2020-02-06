import { Region } from '../region';

export class TemperateClimate extends Region{
    constructor(public _id: string){
        super(_id);
        this._maxForageYield = 100;
        this._maxFarmYield = 1000;
        this._forageYield = this._maxForageYield;
        this._farmYield = this._maxFarmYield;
        this._tileColor = "temperate";
    }
    replenishFood(){
        if(this._forageYield < this.maxForageYield) this._forageYield += 20;
        if(this._forageYield > this.maxForageYield) this._forageYield = this._maxForageYield;
        if(this._farmYield < this._farmYield) this._farmYield += 200;
        if(this._farmYield > this._farmYield) this._farmYield = this._maxFarmYield;
    }
}