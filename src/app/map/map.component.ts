import { Component, OnInit } from '@angular/core';
import { Polity } from '../polity/polity';
import { TileComponent } from '../tile/tile.component';
import { Region } from '../region/region';
import { tropical, dry, temperate, continental, polar, ocean } from '../region/climate';
import { NoPolity } from '../polity/noPolity';
import { Band } from '../polity/band';
import { River, euphrates, tigris, jordan } from '../region/river';



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
    new Region("A1", dry, new Polity()),
    new Region("B1", dry, new Polity()),
    new Region("C1", dry, new Polity()),
    new Region("D1", dry, new Polity()),
    new Region("E1", dry, new Polity()),
    new Region("F1", dry, new Polity()),
    new Region("G1", dry, new Polity()),
    new Region("H1", dry, new Polity()),
    new Region("I1", dry, new Polity()),
    new Region("J1", dry, new Polity()),
    new Region("K1", dry, new Polity()),
    new Region("L1", dry, new Polity()),
    new Region("A2", ocean, new Polity()),
    new Region("B2", temperate, new Polity()),
    new Region("C2", temperate, new Polity()),
    new Region("D2", temperate, new Polity()),
    new Region("E2", temperate, new Polity()),
    new Region("F2", temperate, new Polity()),
    new Region("G2", temperate, new Polity()),
    new Region("H2", temperate, new Polity()),
    new Region("I2", dry, new Polity()),
    new Region("J2", dry, new Polity()),
    new Region("K2", dry, new Polity()),
    new Region("L2", dry, new Polity()),
    new Region("A3", ocean, new Polity()),
    new Region("B3", temperate, new Polity()),
    new Region("C3", temperate, new Polity()),
    new Region("D3", temperate, new Polity()),
    new Region("E3", temperate, new Polity()),
    new Region("F3", temperate, new Polity()),
    new Region("G3", temperate, new Polity()),
    new Region("H3", temperate, new Polity()),
    new Region("I3", temperate, new Polity()),
    new Region("J3", dry, new Polity()),
    new Region("K3", dry, new Polity()),
    new Region("L3", dry, new Polity()),
    new Region("A4", ocean, new Polity()),
    new Region("B4", temperate, new Polity()),
    new Region("C4", temperate, new Polity()),
    new Region("D4", temperate, new Polity()),
    new Region("E4", temperate, new Polity()),
    new Region("F4", temperate, new Polity()),
    new Region("G4", temperate, new Polity()),
    new Region("H4", temperate, new Polity()),
    new Region("I4", temperate, new Polity()),
    new Region("J4", temperate, new Polity()),
    new Region("K4", dry, new Polity()),
    new Region("L4", dry, new Polity()),
    new Region("A5", ocean, new Polity()),
    new Region("B5", temperate, new Polity()),
    new Region("C5", temperate, new Polity()),
    new Region("D5", dry, new Polity()),
    new Region("E5", temperate, new Polity()),
    new Region("F5", temperate, new Polity()),
    new Region("G5", temperate, new Polity()),
    new Region("H5", temperate, new Polity()),
    new Region("I5", temperate, new Polity()),
    new Region("J5", temperate, new Polity()),
    new Region("K5", dry, new Polity()),
    new Region("L5", dry, new Polity()),
    new Region("A6", ocean, new Polity()),
    new Region("B6", temperate, new Polity()),
    new Region("C6", temperate, new Polity()),
    new Region("D6", dry, new Polity()),
    new Region("E6", dry, new Polity()),
    new Region("F6", temperate, new Polity()),
    new Region("G6", temperate, new Polity()),
    new Region("H6", temperate, new Polity()),
    new Region("I6", temperate, new Polity()),
    new Region("J6", temperate, new Polity()),
    new Region("K6", dry, new Polity()),
    new Region("L6", dry, new Polity()),
    new Region("A7", ocean, new Polity()),
    new Region("B7", temperate, new Polity()),
    new Region("C7", temperate, new Polity()),
    new Region("D7", dry, new Polity()),
    new Region("E7", dry, new Polity()),
    new Region("F7", dry, new Polity()),
    new Region("G7", temperate, new Polity()),
    new Region("H7", temperate, new Polity()),
    new Region("I7", temperate, new Polity()),
    new Region("J7", temperate, new Polity()),
    new Region("K7", temperate, new Polity()),
    new Region("L7", dry, new Polity()),
    new Region("A8", ocean, new Polity()),
    new Region("B8", temperate, new Polity()),
    new Region("C8", temperate, new Polity()),
    new Region("D8", dry, new Polity()),
    new Region("E8", dry, new Polity()),
    new Region("F8", dry, new Polity()),
    new Region("G8", dry, new Polity()),
    new Region("H8", temperate, new Polity()),
    new Region("I8", temperate, new Polity()),
    new Region("J8", temperate, new Polity()),
    new Region("K8", temperate, new Polity()),
    new Region("L8", temperate, new Polity()),
    new Region("A9", ocean, new Polity()),
    new Region("B9", temperate, new Polity()),
    new Region("C9", ocean, new Polity()),
    new Region("D9", dry, new Polity()),
    new Region("E9", dry, new Polity()),
    new Region("F9", dry, new Polity()),
    new Region("G9", dry, new Polity()),
    new Region("H9", temperate, new Polity()),
    new Region("I9", temperate, new Polity()),
    new Region("J9", temperate, new Polity()),
    new Region("K9", temperate, new Polity()),
    new Region("L9", temperate, new Polity()),
    new Region("A10", temperate, new Polity()),
    new Region("B10", temperate, new Polity()),
    new Region("C10", dry, new Polity()),
    new Region("D10", dry, new Polity()),
    new Region("E10", dry, new Polity()),
    new Region("F10", dry, new Polity()),
    new Region("G10", dry, new Polity()),
    new Region("H10", dry, new Polity()),
    new Region("I10", temperate, new Polity()),
    new Region("J10", temperate, new Polity()),
    new Region("K10", ocean, new Polity()),
    new Region("L10", ocean, new Polity()),
    new Region("A11", dry, new Polity()),
    new Region("B11", dry, new Polity()),
    new Region("C11", dry, new Polity()),
    new Region("D11", dry, new Polity()),
    new Region("E11", dry, new Polity()),
    new Region("F11", dry, new Polity()),
    new Region("G11", dry, new Polity()),
    new Region("H11", dry, new Polity()),
    new Region("I11", dry, new Polity()),
    new Region("J11", dry, new Polity()),
    new Region("K11", dry, new Polity()),
    new Region("L11", ocean, new Polity()),
    new Region("A12", dry, new Polity()),
    new Region("B12", ocean, new Polity()),
    new Region("C12", dry, new Polity()),
    new Region("D12", dry, new Polity()),
    new Region("E12", dry, new Polity()),
    new Region("F12", dry, new Polity()),
    new Region("G12", dry, new Polity()),
    new Region("H12", dry, new Polity()),
    new Region("I12", dry, new Polity()),
    new Region("J12", dry, new Polity()),
    new Region("K12", dry, new Polity()),
    new Region("L12", dry, new Polity()),
  ];

  // LIST OF RIVERS TO BE ITERATED THRUOUGH AND ADDED TO CORRESPONDING REGIONS
  // public river:River = new River();


  public polities:Polity[] = [new Band(this.regions[0], 'Origin', 10, true)];


  public selectedPolity: Polity = new Polity();


  constructor() {
    //DEVELOP MAP GENERATION LATER
  }


  ngOnInit() {
    this.regions[0]._polity = this.polities[0];
    this.selectedPolity = this.polities[0];
    //ADD RIVERS
    // testRiver.riverDrawing().forEach((line) => {
    //   this.getRegionById(line[0])._borders[0] = line[1];
    // })

    this.drawRivers(euphrates.riverDrawing());
    this.drawRivers(tigris.riverDrawing());
    this.drawRivers(jordan.riverDrawing());

  }


  recievePolity($event) {
    this.selectedPolity = $event;
  }

  getRegionById(id){
    //creating a fake deault region return probably BAD idea...
    let returnedRegion:Region = new Region("none", continental, new NoPolity());
    this.regions.forEach((region) => { 
      if(region.id === id){returnedRegion = region;}
    })
    return returnedRegion;
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

  drawRivers(riverLines){
    this.regions.forEach((region) => {
      if(riverLines[region.id] !== undefined){
        for(let i=0; i < riverLines[region.id].length; i++){
          console.log('hit' + ' ' + region.id + ' ' + riverLines[region.id][i]);
          region._borders[i] = riverLines[region.id][i];
         }
      }
    })
  }
}
