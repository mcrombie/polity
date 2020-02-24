export class Climate{
    constructor(
        public type:string, 
        public naturalFoodYieldReplenish:number,
        public naturalMaxFoodYield:number
    ){}
}

// https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification
export const tropical = new Climate("tropical", 15, 75);
export const dry = new Climate("dry", 5, 25);
export const temperate = new Climate("temperate", 20, 100);
export const continental = new Climate("continental", 10, 50);
export const polar = new Climate("polar", 4, 20);

//TEMPORARY PLEASE DELETE LATER AND TURN INTO A TERRAIN
export const ocean = new Climate("ocean", 0, 0);