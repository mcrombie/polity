import { Polity } from './polity';
import { Region } from '../region/region';
import { Visual,  bandVisual } from '../misc/Visual';
import {chicagoDogNames} from '../misc/nameGenerator';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Village } from './village';
import { continental, ocean } from '../region/climate';
import { NoPolity } from './noPolity';

/* --------------------------------- */
/* BAND POLITY */
/* --------------------------------- */

export class Band extends Polity {
    /* --------------------------------- */
    /* 1. CONSTRUCTOR AND PROPERTIES 
    -- The most basic form of polity --*/
    /* --------------------------------- */
    constructor(public _region: Region, public _name: string, public _population: number, public _partOfMainArray:boolean) {
        super();
        this._region = _region;
        this._name = this._name;
        this.polityType = 'Band';
        this._hasMoved = false;
        this._settled = true;
        this._population = this._population;
        this.growthRate = 0.01;
        this._foodYielded = 0;
        this._foodStored = 0;
        this._farmingLevel = 1;

        this._visual = bandVisual;
        this._partOfMainArray = _partOfMainArray;

        this._icons = Array(1).fill(0).map((x,i)=>i); 
    }

    /* --------------------------------- */
    /* 2. FOOD STUFF*/
    /* --------------------------------- */

    bandSplit(regions, region, population) {
        let newBand = new Band(region, chicagoDogNames.popRandomName(), population, false);
        region._polity = newBand;
        region._polity.act(regions);
    }

    /* --------------------------------- */
    /*  FOOD METHODS */
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
    /* BAND MOVEMENT CHOICES 
    -- How this type of polity makes decisions --*/
    /* --------------------------------- */

    firstMove(regions) {
        // 1. SCOUT NEIGHBORING REGIONS TO SEE WHICH HAS THE HIGHEST FOOD YIELD
        let newRegionOptions = this.searchForFreeNeighboringRegions(regions, this._region);
        // 2A. NO AVAILABLE TILES TO MIGRATE TO, FARM WEHRE YOU ARE
        if (newRegionOptions.length < 1) { this.farm(); }
        // 2B. FIND WHICH NEIGHBOR HAS THE HIGHEST VALUE
        else {
            let newRegion = this.findHighestYieldingRegion(newRegionOptions);
            // 3A. IF THIS REGION YIELDS MORE FOOD THAN THE CURRENT, MOVE THERE
            if (newRegion !== undefined && newRegion._foodYield >= this._region._foodYield) {
                this.migrate(this._region, newRegion, this);
            }
            // 3B. IF THIS REGION YIELDS LESS THAN THE CURRENT, FARM WHERE YOU ARE
            else {
                this.farm();
            }
        }

    }
    secondMove(regions) {
        this.forage();
    }

    /* --------------------------------- */
    /* UPDATING
    /* --------------------------------- */
    update(){
        //UPDATE ICONS TO REFLECT POPULATION SIZE
        if(this._population >= 2 && this._population < 50){this._icons = Array(1).fill(0).map((x,i)=>i); }
        else if(this._population >= 50 && this._population < 100){this._icons = Array(2).fill(0).map((x,i)=>i); }
        else if(this._population >= 100  && this._population < 150){this._icons = Array(3).fill(0).map((x,i)=>i); }
        else if(this._population >= 150  && this._population < 200){this._icons = Array(4).fill(0).map((x,i)=>i); }
        else if(this._population >= 200  && this._population < 250){this._icons = Array(5).fill(0).map((x,i)=>i); }
        else if(this._population >= 250  && this._population < 300){this._icons = Array(6).fill(0).map((x,i)=>i); }
        else if(this._population >= 300  && this._population < 350){this._icons = Array(7).fill(0).map((x,i)=>i); }
        else if(this._population >= 350  && this._population < 400){this._icons = Array(8).fill(0).map((x,i)=>i); }
        else if(this._population >= 400  && this._population < 450){this._icons = Array(9).fill(0).map((x,i)=>i); }
        else if(this._population >= 450  && this._population < 500){this._icons = Array(10).fill(0).map((x,i)=>i); }
        else if(this._population >= 500  && this._population < 550){this._icons = Array(11).fill(0).map((x,i)=>i); }
        else if(this._population >= 550){this._icons = Array(12).fill(0).map((x,i)=>i); }

        //SET TRANSITION FROM BAND TO VILLAGE
        if(this._population >= 500 && this._farmingLevel >= 10 && this._region._riverConnections > 0){
            console.log('Advent of a village.')
            let village = new Village(this,false);
            this._region._polity = village;
            this._region = new Region(0,0, ocean, new NoPolity());
        }
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