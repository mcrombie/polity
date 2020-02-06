import { Region } from '../region/region';
import { Visual, forestVisual, bandVisual } from '../misc/Visual';
import {chicagoDogNames} from '../misc/nameGenerator';
import {shuffle} from '../helper';

// INTERFACE AND CLASS EXPERIMENTION PER MOSH TUTORIAL 1/27/20

export class Polity {
  public _settled:boolean;
  public _population: number; 
  public _food: number;
  public _visual:Visual;
  public _name?: string;
  public _health:number;
  public _happiness:number;
  private _polityType: string;
  private _birthRate: number;
  private _infantMortality: number;
  private _growthRate: number;
  public _mortalityRate:number;
  public _migrationPossible:boolean;
  public foodYielded: number;
  public _hasMoved:boolean;

  constructor() {
    this._visual = forestVisual;
    this._name = ".";
    this._settled = false;
    this._polityType = 'polity';
    this._health = 50; //scale of 1 - 100 - basically life expectancy of 50
    this._happiness = 5; //scale of 1 - 10
    this._birthRate = this.calculateBirthRate();
    this._infantMortality = .5; //assuming half of all babies don't make it
    this._growthRate = this.calculateGrowthRate();
    this._mortalityRate = this.calculateMortalityRate();
    this._migrationPossible = true;
    this._hasMoved=false;

  }

  //GETTERS AND SETTERS FOR PRIVATE PROPERTIES
  get polityType() { return this._polityType };
  set polityType(value) { this._polityType = value; };
  get growthRate() { return this._growthRate };
  set growthRate(value) { this._growthRate = value; };
  get birthRate() { return this._birthRate };
  set birthRate(value) { this._birthRate = value; };


  //DISPLAY DETAILS
  details() {
    console.log(`This is the ${this.polityType} of ${this._name}. It has ${this._population} people. 
    They currently have ${this._food} food. Their growth rate is ${this.growthRate}.`);
  }

  //BIRTH RATE FORMULA
  calculateBirthRate() {
    let foodSurplus;
    this._food > 0 ? foodSurplus = this._food/100: foodSurplus = 0;
    return ((this._population / 2) / 2) + foodSurplus; //assuming each woman is having a child every other year
  }

  //GROWTH RATE FORMULA
  calculateGrowthRate() {
    let infantSurvival = (this._birthRate) * (this._infantMortality);
    let gr = Math.log10((this._population + infantSurvival) / this._population);
    gr -= this._mortalityRate; //how many people died
    return gr;
  }

  calculateMortalityRate(){
    return (1/ this._health);
  }

  //POPULATION GROWTH FORMULA
  populationGrowth() {
    //ADJUST GROWTH RATE
    this._birthRate = this.calculateBirthRate();
    this._growthRate = this.calculateGrowthRate();
    this._mortalityRate = this.calculateMortalityRate();
    let np = this._population * (Math.exp(this._growthRate * 1)); //add Math.floor? and time
    this._population = np;
  }

  //ROUNDED DOWN POPULATION...YOU CAN'T HAVE FRACTIONAL PEOPLE
  getFlooredPopulation(){
    return Math.floor(this._population);
  }

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

  freeAction(regions,region){

  }

  //METHOD ENCAPSULATING ALL ACTIONS BY THE POLITY
  act(regions, region) {
    //console.log(`This ${this.polityType} is too abstract to do anything on Tile-${tile.id}`);
  }

  // FORAGE SOCIETY POTENTIAL ACTIONS
  doNothing(){
    //...they lounge about doing nothing of interest. Make this contribute to happiness later on
  }

  findHighestYieldingRegion(regions:Region[], method:string){
    let highestYield = 0;
    let chosenRegion:Region;
    let shuffledRegions = shuffle(regions);
    for(let i=0; i < shuffledRegions.length; i++){
      let regionYield = shuffledRegions[i]._forageYield;

      if(regionYield > highestYield){
        highestYield = regionYield;
        chosenRegion = shuffledRegions[i];
      } 
    }
    return chosenRegion;
  }

  migrate(regions,region){
    // 1. Search 8 surrounding tiles beginning with a random direction for first unsettled tile
    let newRegionOptions = this.searchForFreeNeighboringRegions(regions,region);

    // 2. If you can't find a new region this fails
    if(newRegionOptions.length < 1){
      // If no migration is possible, set a boolean for polity declaring migration impossible
      // Boolean will keep polity from choosing migration next year
      this._migrationPossible = false;
    }
    else{
      // 3. Select which region has the most value
      let newRegion = this.findHighestYieldingRegion(newRegionOptions, "forage");
      // 4. If the potential new region is more valuable than the current, move it there, otherwise stay in current region
      if(newRegion._forageYield >= region._forageYield){
        region._polity = new Polity();
        newRegion._polity = this;
        return newRegion
      } 
      else{
        return region;
      }
    }

  }

  splitBand(){
    // // 5. Transfer polity to first unsettled tile
    // let newPolityName = chicagoDogNames.popRandomName();
    // let newPolityPopulation = this._population/2;
    // //Add new polity to region
    // newRegion._polity = new Band(newRegion, newPolityPopulation, 0, newPolityName);
    // // Remove corresponding population from old region
    // this._population -= newPolityPopulation;
    // console.log(`The ${newRegion._polity._polityType} of ${newRegion._polity._name} from the 
    // ${this._polityType} of  ${this._name} has settled the region of ${newRegion._id}`);
  }

  forage(region) {
    let yieldFactor = 1.1;
    let potentialYield = (this._population * yieldFactor);
    //FORAGE FOOD
    this.foodYielded = (potentialYield <= region._forageYield) ? potentialYield : region._forageYield;
    region._forageYield -= this.foodYielded;
    this._food += this.foodYielded;

    //console.log(`${this._name} yielded ${this.foodYielded} while foraging ${region._id}.`);
  }

  farm(region){
    let yieldFactor = 1.3;
    let potentialYield = (this._population * yieldFactor);
    //FARM FOOD
    this.foodYielded = (potentialYield <= region._maxFarmYield) ? potentialYield : region._maxFarmYield;
    this._food += this.foodYielded;

    //console.log(`${this._name} yielded ${this.foodYielded} with farming.`);
  }

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

/*******************
 * BAND POLITY
 *******************/
export class Band extends Polity {
  
  public storageCapacity:number;
  constructor(public _region:Region, public _population: number, public _food: number,
    public _name?: string) {
    super();
    this._visual = bandVisual;
    this._settled = true;
    this.polityType = 'band';
    this.storageCapacity = .01; //they can only save 1/100th of extra food
  }



  eat() {
    this._food -= this._population;
  }

  storeFood() {
    //ESSENTIALLY JUST CAPPING FOOD CARRIED OVER FROM ONE YEAR TO ANOTHER FOR NOW

    //INCASE THERE IS NOT ENOUGH FOOD, STARVE
    if (this._food < 0) {

      console.log(`In ${this._name}, ${-this._food} people died of starvation or went looking for new food`);
      this._population += this._food;
      //FOOD STORE GOES BACK TO 0 BECAUSE IT CANNOT BE NEGATIVE
      this._food = 0;
      
      
    }
    //THEY STORE WHAT FOOD THEY CAN
    else{
      this._food = (this.foodYielded - this._population) * this.storageCapacity;
    }
  }

  freeAction(regions,region) {
      // 1. DO NOTHING
      // 2. MIGRATE
      if(region._forageYield <= this._population){
        let newRegionOptions = this.searchForFreeNeighboringRegions(regions,region);
        // console.log(newRegionOptions);
        let newRegion = this.findHighestYieldingRegion(newRegionOptions, "forage");
        // console.log(`migrated to ${newRegion._id}`);
        // If the potential new region is more valuable than the current, move it there, otherwise stay in current region
        if(newRegion._forageYield >= region._forageYield){
          region._polity = new Polity();
          newRegion._polity = this;
        } 
      }

      // 3. FARM
      // 4. ATTACK
      // 5. PRAY
  }


  dieOff(){

  }

  act(regions,region) {
    // 1. FORAGE FOOD
    this.forage(region);
    // 2. CONSUME FOOD
    this.eat();
    // 3. FREE ACTION
    this.freeAction(regions,region);
    // 4. STORE FOOD
    this.storeFood();
    // 5. ANNUAL DEATH RATE
    this.dieOff();
    this._hasMoved = true;


  }

}
