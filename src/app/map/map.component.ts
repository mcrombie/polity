import { Component, OnInit, Input } from '@angular/core';
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
  @Input() regions: Region[];
  @Input() rivers:River[];


  public polities:Polity[] = [];


  public selectedPolity: Polity = new Polity();


  constructor() {
    //DEVELOP MAP GENERATION LATER
  }


  ngOnInit() {
    // ADD POLITIES
    this.polities.push(new Band(this.regions[66], 'Origin', 10, true));
    this.regions[66]._polity = this.polities[0];
    this.selectedPolity = this.polities[0];
    
    //ADD RIVERS
    this.rivers.forEach((river) => {
      this.drawRivers(river.riverDrawing());
    })
    // this.drawRivers(euphrates.riverDrawing());
    // this.drawRivers(tigris.riverDrawing());
    // this.drawRivers(jordan.riverDrawing());

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
