import { Polity } from './polity';
import { Region } from '../region/region';
import { Visual,  bandVisual, townVisual } from '../misc/Visual';
import {fertileCrescentNames} from '../misc/nameGenerator';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Band } from './band';
import { Village } from './village';

/* --------------------------------- */
/* Town POLITY */
/* --------------------------------- */

export class Town extends Polity {
    /* --------------------------------- */
    /* 1. CONSTRUCTOR AND PROPERTIES 
    -- The most basic form of polity --*/
    /* --------------------------------- */
    constructor(public _village: Village, public _partOfMainArray:boolean) {
        super();
        this._region = _village._region;
        this._name = this._village._name;
        this.polityType = 'Town';
        this._hasMoved = _village._hasMoved;
        this._settled = true;
        this._population = _village._population;
        this.growthRate = 0.02; //RAISED FOR SEDENTISM
        this._foodYielded = _village._foodYielded;
        this._foodStored = _village._foodStored;
        this._farmingLevel = 11; // MAYBE

        this._visual = townVisual;
        this._partOfMainArray = _partOfMainArray;

        this._icons = Array(1).fill(0).map((x,i)=>i); 
    }

    /* --------------------------------- */
    /* 2. FOOD STUFF*/
    /* --------------------------------- */

    bandSplit(regions, region, population) {
        let newBand = new Band(region, fertileCrescentNames.popRandomName(), population, false);
        region._polity = newBand;
        region._polity.act(regions);
    }

    /* --------------------------------- */
    /*  FOOD METHODS 
    
    IS THIS THE SAME FOR BAND? DO SOMETHING ABOUT THIS!
    */
    
    /* --------------------------------- */
    eat(regions) {
        let hungryPeople = this._population - this._foodYielded;

        // 1. INCASE THERE IS NOT ENOUGH FOOD, USE STORAGE
        if(hungryPeople > 0){
            if(this._foodStored >= hungryPeople){
                this._foodStored -= hungryPeople;
                hungryPeople = 0;
            }
            else{
                hungryPeople -= this._foodStored;
                this._foodStored = 0;
            }
        }

        // 2. INCASE THERE IS STILL NOT ENOUGH FOOD, TRY MIGRATING
        if (hungryPeople > 0) {
            // 1A. IF THERE IS SOMEWHERE TO GO, PART OF THE BAND MIGRATES TO A NEW REGION
            let newRegionOptions = this.searchForFreeNeighboringRegions(regions, this._region);
            if (newRegionOptions.length > 0) {
                // new band will be between the excess population and half the total population
                let minToMigrate = hungryPeople;
                let newBandSize = Math.floor((Math.random() * (Math.floor(this._population / 2))) + minToMigrate);
                let newRegion = this.findHighestYieldingRegion(newRegionOptions);
                this.bandSplit(regions, newRegion, newBandSize);
                this._population -= newBandSize;
            }
            // 1B. PEOPLE STARVE
            else {
                this._population -= hungryPeople;
            }
            


        }
        // 3.FOOD YIELDED MUST RETURN TO 0
        this._foodYielded = 0;
    }
    /* --------------------------------- */
    /* VILLAGE MOVEMENT CHOICES 
    /* --------------------------------- */

    firstMove(regions) {
        //ALWAYS FARM?
        this.farm();

    }
    secondMove(regions) {
        this.forage();
    }

    /* --------------------------------- */
    /* UPDATING
    /* --------------------------------- */
    update(){
        //UPDATE ICONS TO REFLECT POPULATION SIZE
        if(this._population >= 2 && this._population < 5000){this._icons = Array(1).fill(0).map((x,i)=>i); }
        else if(this._population >= 5000 && this._population < 10000){this._icons = Array(2).fill(0).map((x,i)=>i); }
        else if(this._population >= 10000 && this._population < 15000){this._icons = Array(3).fill(0).map((x,i)=>i); }
        else if(this._population >= 15000  && this._population < 20000){this._icons = Array(4).fill(0).map((x,i)=>i); }
        else if(this._population >= 20000  && this._population < 25000){this._icons = Array(5).fill(0).map((x,i)=>i); }
        else if(this._population >= 25000  && this._population < 30000){this._icons = Array(6).fill(0).map((x,i)=>i); }
        else if(this._population >= 30000  && this._population < 35000){this._icons = Array(7).fill(0).map((x,i)=>i); }
        else if(this._population >= 35000  && this._population < 3500){this._icons = Array(8).fill(0).map((x,i)=>i); }
        else if(this._population >= 40000  && this._population < 4000){this._icons = Array(9).fill(0).map((x,i)=>i); }
        else if(this._population >= 45000  && this._population < 4500){this._icons = Array(10).fill(0).map((x,i)=>i); }
        else if(this._population >= 50000  && this._population < 5000){this._icons = Array(11).fill(0).map((x,i)=>i); }
        else if(this._population >= 55000){this._icons = Array(12).fill(0).map((x,i)=>i); }

        //SET TRANSITION FROM TOWN TO CITY
    }

    act(regions) {
        this.firstMove(regions);
        this.secondMove(regions);
        this.eat(regions);
        this.populationGrowth();
        this.update();
        this._hasMoved = true;
    }
}