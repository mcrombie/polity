import { Region } from '../region/region';

// INTERFACE AND CLASS EXPERIMENTION PER MOSH TUTORIAL 1/27/20

export class Polity {
  public _settled:boolean;
  public _population: number; 
  public _food: number;
  public _name?: string;
  private _polityType: string;
  private _birthRate: number;
  private _infantMortality: number;
  private _growthRate: number;

  constructor() {
    this._name = "Abstract Polity";
    this._settled = false;
    this._polityType = 'polity';
    this._birthRate = this.calculateBirthRate();
    this._infantMortality = .5; //assuming half of all babies don't make it
    this._growthRate = this.calculateGrowthRate();

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
    let foodSurplus = (this._food / 100);
    return ((this._population / 2) / 2) + foodSurplus; //assuming each woman is having a child every other year
  }

  //GROWTH RATE FORMULA
  calculateGrowthRate() {
    let infantSurvival = (this._birthRate) * (this._infantMortality);
    let gr = Math.log10((this._population + infantSurvival) / this._population);
    return gr;
  }

  //POPULATION GROWTH FORMULA
  populationGrowth() {
    //ADJUST GROWTH RATE
    this.birthRate = this.calculateBirthRate();
    this.growthRate = this.calculateGrowthRate();
    let np = this._population * (Math.exp(this.growthRate * 1)); //add Math.floor? and time
    this._population = np;
  }

  searchForFreeNeighboringRegions(regions, region){
    let chosenRegion:Region;
    let regionOptions = [
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + (region._id[1] - 1), //northwest
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + region._id[1], //west
      (String.fromCharCode(region._id[0].charCodeAt(0) - 1)) + (parseInt(region._id[1]) + 1), //southwest
      region._id[0] + (parseInt(region._id[1]) - 1), //north
      region._id[0] + (parseInt(region._id[1]) + 1), //south
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + (region._id[1] - 1), //northeast
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + region._id[1], //east
      (String.fromCharCode(region._id[0].charCodeAt(0) + 1)) + (parseInt(region._id[1]) + 1) //southeast

    ];

    regions.filter((potentialRegion) => {
      for (let i=0; i < regionOptions.length; i++){
        if(potentialRegion._id == regionOptions[i]){
          chosenRegion = potentialRegion;
        }
      }
    })

    return chosenRegion;
  }

  //METHOD ENCAPSULATING ALL ACTIONS BY THE POLITY
  act(regions, region) {
    //console.log(`This ${this.polityType} is too abstract to do anything on Tile-${tile.id}`);
  }

  // FORAGE SOCIETY POTENTIAL ACTIONS
  doNothing(){
    //...they lounge about doing nothing of interest. Make this contribute to happiness later on
  }

  migrate(regions,region){
    // 1. Search 8 surrounding tiles beginning with a random direction for first unsettled tile
    let newRegion = this.searchForFreeNeighboringRegions(regions,region);

    // 2. If you can't find a new region this fails
    if(typeof newRegion === undefined){
      console.log('failed to find new region!')
    }
    // 3. Transfer polity to first unsettled tile
    else{
      console.log(`We are settling the new region of ${newRegion._id}`);
      let newPolityName = "SammyKa";
      let newPolityPopulation = 10;
      //Add new polity to region
      newRegion._polity = new Band(newRegion, newPolityPopulation, 0, newPolityName);
      // Remove corresponding population from old region
      this._population -= newPolityPopulation;

    }
    // 4. If no migration is possible, set a boolean for polity declaring migration impossible
    // 5. Boolean will keep polity from choosing migration next year
    // 6. Return the new region
    return newRegion;
  }

  farm(){
    // 1. Generate max food for the tile given the crop used, and farming prowess of the polity
    // 2. Generate variable determining how much food the population makes
        //this.foodYielded = (this._population * newVar);
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
  public foodYielded: number;
  public storageCapacity:number;
  constructor(public _region:Region, public _population: number, public _food: number,
    public _name?: string) {
    super();
    this._settled = true;
    this.polityType = 'band';
    this.storageCapacity = .01; //they can only save 1/100th of extra food
  }

  forage(tile) {
    // console.log(`The ${this.polityType} of ${this._name} is foraging on Tile-${tile.id}`);

    //FORAGE FOOD
    this.foodYielded = (this._population * 1.1);
    (this.foodYielded <= tile._maxForageYield) ? this._food += this.foodYielded : this._food += tile._maxForageYield;
    //USE UP TILE SPACE
    tile.space--;


  }

  eat() {
    this._food -= this._population;
  }

  storeFood(regions,region) {
    //ESSENTIALLY JUST CAPPING FOOD CARRIED OVER FROM ONE YEAR TO ANOTHER FOR NOW

    //INCASE THERE IS NOT ENOUGH FOOD
    if (this._food < 0) {

      // 1. Population migrates
      let newRegion = this.migrate(regions,region);
      console.log(`Some people from ${this._name} have migrated to ${newRegion._id}`)
      
      //POPULATION DIES OF STARVATION OR LOOKS FOR NEW FOOD SOURCE
      // console.log(`${-this._food} people died of starvation or went looking for new food`);
      // this._population += this._food;
      //FOOD STORE IS BACK TO 0
      this._food = 0;
    }
    //THEY STORE WHAT FOOD THEY CAN
    else{
      this._food = (this.foodYielded - this._population) * this.storageCapacity;
    }
  }

  freeAction() {
      // 1. DO NOTHING
      // 2. MIGRATE
      // 3. FARM
      // 4. ATTACK
      // 5. PRAY
  }

  act(regions,region) {
    
    
    // 1. FORAGE FOOD
    this.forage(region);
    // 2. CONSUME FOOD
    this.eat();
    // 3. FREE ACTION
    this.freeAction();
    // 4. STORE FOOD
    this.storeFood(regions,region);


  }

}
