import { Component, OnInit } from '@angular/core';
import { Polity } from '../polity/polity';
import { TileComponent } from '../tile/tile.component';
import { Region } from '../region/region';
import { tropical, dry, temperate, continental, polar } from '../region/climate';
import { NoPolity } from '../polity/noPolity';
import { Band } from '../polity/band';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //public numberOfTiles:number[] = Array(9).fill(0).map((x,i)=>i);
  // EMPTY TILES INITIATED WITH AN ABSTRACT POLITY
  // FIRST POLITY IN THE GAME

  //public startingPolity = new Band(10, 10, 'SammyKa');
  public year = 0;
  public regions: Region[] = [
    new Region("A1", temperate, new Polity()),
    new Region("B1", continental, new Polity()),
    new Region("C1", dry, new Polity()),
    new Region("D1", tropical, new Polity()),
    new Region("A2", polar, new Polity()),
    new Region("B2", continental, new Polity()),
    new Region("C2", continental, new Polity()),
    new Region("D2", continental, new Polity()),
    new Region("A3", continental, new Polity()),
    new Region("B3", continental, new Polity()),
    new Region("C3", continental, new Polity()),
    new Region("D3", continental, new Polity()),
    new Region("A4", continental, new Polity()),
    new Region("B4", continental, new Polity()),
    new Region("C4", continental, new Polity()),
    new Region("D4", continental, new Polity())
  ];


  public polities:Polity[] = [new Band(this.regions[0], 'Origin', 10, true)];


  public selectedPolity: Polity = new Polity();


  constructor() {
    //DEVELOP MAP GENERATION LATER
  }


  ngOnInit() {
    this.regions[0]._polity = this.polities[0];
    this.selectedPolity = this.polities[0];
  }


  recievePolity($event) {
    this.selectedPolity = $event;
  }

  forwardYears(number) {
    // 1. UPDATE YEAR
    this.year += number;
    for (let i = 0; i < number; i++) {
      // 2. POLITIES ACT
      this.polities.forEach((polity) => { polity.act(this.regions); })
      // 3. REGIONS ACT
      this.regions.forEach((region) => { 
        // ADD NEW REGIONS TO MAIN ARRAY
        if(!region._polity._partOfMainArray){
          this.polities.push(region._polity)
          region._polity._partOfMainArray = true;
        }
        region.replenishFood(); 
      })
      // 4. RESET POLITY MOVEMENT BOOLEANS ?? DON'T THINK I NEED THIS NOW THAT THEY ARE SEPARATE FROM REGIONS
      //this.polities.forEach((polity) => { polity._hasMoved = false; })
    }
  }

  globalPopulation(){
    let globalPopulation = 0;
    this.polities.forEach((polity) => {
      globalPopulation += polity._population;
    })
    return globalPopulation;
  }
  globalFoodYielded(){
    let globalFood = 0;
    this.regions.forEach((region) => { 
      globalFood += region._foodYield;
    })
    return globalFood;
  }
  globalFoodStored(){
    let globalFoodStored = 0;
    this.polities.forEach((polity) => {
      globalFoodStored += polity._foodStored;
    })
    return globalFoodStored;
  }
}
