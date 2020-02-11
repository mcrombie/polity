import { Polity } from './polity';

export class NoPolity extends Polity{
    /* --------------------------------- */
    /* 1. CONSTRUCTOR AND PROPERTIES 
    -- Use this class when a region is unsettled by any polity --*/
    /* --------------------------------- */
    constructor(){
        super();
        this._name = '';
        this.polityType = 'None';
        this._hasMoved = false;
        this._settled = false;
        this._population = 0;
        this.growthRate = 0;
        this._foodYielded = 0;
        this._foodStored = 0;
        this._farmingLevel = 0;
    }
}