// INTERFACE AND CLASS EXPERIMENTION PER MOSH TUTORIAL 1/27/20

export class Polity {
  private _polityType: string;
  private _birthRate: number;
  private _infantMortality: number;
  private _growthRate: number;

  constructor(public _population: number, public _food: number, public _name?: string) {
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

  //METHOD ENCAPSULATING ALL ACTIONS BY THE POLITY
  act(tile) {
    console.log(`This ${this.polityType} is too abstract to do anything on Tile-${tile.id}`);
  }


}

/*******************
 * BAND POLITY
 *******************/
export class Band extends Polity {
  public foodYielded: number;
  public storageCapacity:number;
  constructor(public _population: number, public _food: number,
    public _name?: string) {
    super(_population, _food, _name);
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

  storeFood() {
    //ESSENTIALLY JUST CAPPING FOOD CARRIED OVER FROM ONE YEAR TO ANOTHER FOR NOW

    //INCASE THERE IS NOT ENOUGH FOOD
    if (this._food < 0) {
      //POPULATION DIES OF STARVATION OR LOOKS FOR NEW FOOD SORUCE
      console.log(`${-this._food} people died of starvation or went looking for new food`);
      this._population += this._food;
      //FOOD STORE IS BACK TO 0
      this._food = 0;
    }
    //THEY STORE WHAT FOOD THEY CAN
    else{
      this._food = (this.foodYielded - this._population) * this.storageCapacity;
    }
  }

  act(tile) {
    // 1. FORAGE FOOD
    this.forage(tile);
    // 2. CONSUME FOOD
    this.eat();
    // 3. STORE FOOD
    this.storeFood();


  }

}