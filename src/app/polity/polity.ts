import { Region } from '../region/region';
import { Visual, forestVisual, bandVisual } from '../misc/Visual';
import {chicagoDogNames} from '../misc/nameGenerator';
import {shuffle} from '../helper';

// INTERFACE AND CLASS EXPERIMENTION PER MOSH TUTORIAL 1/27/20

export class Polity {
  /* --------------------------------- */
  /* 1. PROPERTIES AND CONSTRUCTOR 
  -- This is an abstract class never to be used -- 
  -- 所以请问不用 --*/
  /* --------------------------------- */
  public _name?: string;
  private _polityType: string;

  public _region:Region;

  public _hasMoved:boolean;
  public _settled:boolean;
  public _partOfMainArray:boolean;

  public _population: number; 
  private _growthRate: number;
  
  public _foodYielded:number;
  public _foodStored: number;
  public _foodStorageCapacity:number;
  
  public _farmingLevel:number;

  public _visual:Visual;

  

  constructor() {
    this._name = '';
    this.polityType = 'None';
    this._hasMoved = false;
    this._settled = false;
    this._population = 0;
    this.growthRate = 0;
    this._foodYielded = 0;
    this._foodStored = 0;
    this._foodStorageCapacity = 0;
    this._farmingLevel = 0;
    this._visual = forestVisual;
    this._partOfMainArray = false;
  }

  /* --------------------------------- */
  /* 2. GETTERS AND SETTERS */
  /* --------------------------------- */
  get polityType() { return this._polityType };
  set polityType(value) { this._polityType = value; };
  get growthRate() { return this._growthRate };
  set growthRate(value) { this._growthRate = value; };


  /* --------------------------------- */
  /* 3. DATA DISPLAY */
  /* --------------------------------- */
  details() {
    console.log(`This is the ${this.polityType} of ${this._name}. It has ${this._population} people. 
    They currently have ${this._foodStored} food. Their growth rate is ${this.growthRate}.`);
  }


  /* --------------------------------- */
  /* 4. HANDLING DEMOGRAPHIC */
  /* --------------------------------- */
  populationGrowth() {
    for (let i = 1; i <= this._population; i++){
      let r = Math.random();
      if(r <= this._growthRate) {this._population++;}; //too inefficient?
    }
  }

  //ROUNDED DOWN POPULATION...YOU CAN'T HAVE FRACTIONAL PEOPLE
  getFlooredPopulation(){
    return Math.floor(this._population);
  }

  /* --------------------------------- */
  /* 5. HANDLING REGIONS */
  /* --------------------------------- */
  searchForFreeNeighboringRegions(regions, region){
    // 1. ARRAY OF 8 NEIGHBORING REGIONS
    let regionOptionIDs = [
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + (region._id[1] - 1), //northwest
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + region._id[1], //west
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + (parseInt(region._id[1]) + 1), //southwest
      region._id[0] + (parseInt(region._id[1]) - 1), //north
      region._id[0] + (parseInt(region._id[1]) + 1), //south
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + (region._id[1] - 1), //northeast
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + region._id[1], //east
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + (parseInt(region._id[1]) + 1) //southeast

    ];

    // 2. ARRAY OF NEIGHBORING REGIONS UNSETTLED
    let regionOptions:Region [] = [];
    regions.filter((potentialRegion) => {
      for (let i=0; i < regionOptionIDs.length; i++){
        if(potentialRegion._id == regionOptionIDs[i] && !potentialRegion._polity._settled){
          regionOptions.push(potentialRegion);
        }
      }
    })



    return regionOptions;
  }

  findHighestYieldingRegion(regions:Region[]){
    let highestYield = 0;
    let chosenRegion:Region;
    let shuffledRegions = shuffle(regions);
    for(let i=0; i < shuffledRegions.length; i++){
      let regionYield = shuffledRegions[i]._foodYield;

      if(regionYield > highestYield){
        highestYield = regionYield;
        chosenRegion = shuffledRegions[i];
      } 
    }
    
    return chosenRegion;
  }

  migrate(oldRegion,newRegion, polity){
    oldRegion._polity = new Polity();
    newRegion._polity = polity;
    polity._region = newRegion;
  }

  foodStorage(){
    if(this._foodStored < this._foodStorageCapacity){
      let foodStorageSpaceRemaining = this._foodStorageCapacity - this._foodStored;
      if(this._region._foodYield >= foodStorageSpaceRemaining){
        this._foodStored += foodStorageSpaceRemaining;
        this._region._foodYield -= foodStorageSpaceRemaining;
      }
      else{
        this._foodStored += this._region._foodYield;
        this._region._foodYield = 0;
      }
    }
  }



  forage() {
    // 1A. REGION HAS ENOUGH FOOD FOR POPULATION
    if(this._population <= this._region._foodYield){
      // POLITY CONSUMES WHAT THEY NEED
      this._foodYielded = this._population;
      this._region._foodYield -= this._foodYielded;
      // FOOD STORAGE
      this.foodStorage();
      // MAKE SURE FOOD STORED DOES NOT EXCEED CAPACITY
      if (this._foodStored > this._foodStorageCapacity){this._foodStored = this._foodStorageCapacity;};
    }
    // 1B. REGION DOES NOT HAVE ENOUGH FOOD FOR POPULATION
    else{
      this._foodYielded = this._region._foodYield;
      this._region._foodYield -= this._foodYielded;
    }
    console.log(`Food stored is ${this._foodStored}`);
  }

  farm(){
    // FARMING FUNCTION HERE
    // FINISH REGION FIRST
    let r = (Math.random() * this._farmingLevel) / 100;
    let farmingYield = Math.floor(r * this._region._foodYieldReplenish * this._population);
    this.upgradeFarmingLevel(farmingYield);
    this._region._farmingYield =  farmingYield;
    console.log(`${this._name} farmed ${farmingYield} food.`)
  }

  upgradeFarmingLevel(farmingYield){
    let newLevel:number = 1;
    if(farmingYield >= 1){newLevel = 2;}
    if(farmingYield >= 2){newLevel = 3;}
    if(farmingYield >= 4){newLevel = 4;}
    if(farmingYield >= 8){newLevel = 5;}
    if(farmingYield >= 16){newLevel = 6;}
    if(farmingYield >= 32){newLevel = 7;}
    if(farmingYield >= 64){newLevel = 8;}
    if(farmingYield >= 128){newLevel = 9;}
    if(farmingYield >= 256){newLevel = 10;}
    if(this._farmingLevel < newLevel){this._farmingLevel = newLevel;}
    this.upgradeFoodStorageCapacity();
    
  }

  upgradeFoodStorageCapacity(){
    if(this._farmingLevel == 1){this._foodStorageCapacity = 0;}
    if(this._farmingLevel == 2){this._foodStorageCapacity = 1;}
    if(this._farmingLevel == 3){this._foodStorageCapacity = 2;}
    if(this._farmingLevel == 4){this._foodStorageCapacity = 4;}
    if(this._farmingLevel == 5){this._foodStorageCapacity = 8;}
    if(this._farmingLevel == 6){this._foodStorageCapacity = 16;}
    if(this._farmingLevel == 7){this._foodStorageCapacity = 32;}
    if(this._farmingLevel == 8){this._foodStorageCapacity = 64;}
    if(this._farmingLevel == 9){this._foodStorageCapacity = 128;}
    if(this._farmingLevel == 10){this._foodStorageCapacity = 256;}

  }

  /* --------------------------------- */
  /* 7. ACTION METHOD
  -- THIS WILL BE DEPENDENT ON POLITY TYPE */
  /* --------------------------------- */

  act(regions){}

  /* --------------------------------- */
  /* 8. FUTURE FUNCTIONALITY */
  /* --------------------------------- */

  attack(){
    // 1. Search 8 surrounding tiles randomly for first settled tile
    // 2. Commence battle between two polities based on a combat strength property
    // 3. Determine casualties for both sides
    // 4. Determine winner of the battle
    // 5. Transfer spoils to winner
    // 6. If invader won, invader chooses to go home or stay in conquered tile
    // 7. If invader stays, generate new band for conquerors from old band population 
      //(bands can only occupy one tile. Once they reach Tribe level, they are able to exist across multiple tiles)
    // 8. Conquered polity is either assimilate or dispersed
  }

  pray(){
    // 1. Each prayer increases faith 
    // 2. If polity has faith, there is a small chance each year they will get divine inspiration
    // 3. Divine inspiration allows them to start building a temple
    // 4. Temple takes time to build
    // 5. Once completed it has benefits...
      // attracts settlers?
      // somehow leads to farming?
      // better combat strength?
  }

}
