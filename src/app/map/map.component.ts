import { Component, OnInit, Input } from '@angular/core';
import { Polity } from '../polity/polity';
import { TileComponent } from '../tile/tile.component';
import { Region } from '../region/region';
import { tropical, dry, temperate, continental, polar, ocean } from '../region/climate';
import { NoPolity } from '../polity/noPolity';
import { Band } from '../polity/band';
import { River, euphrates, tigris, jordan } from '../region/river';
import { Village } from '../polity/village';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public year = 0;
  @Input() regions: Region[];
  @Input() rivers:River[];


  public polities:Polity[] = [];


  public selectedPolity: Polity = new Polity();


  constructor() {
  }


  ngOnInit() {
    // ADD POLITIES
    this.polities.push(new Band(this.regions[0], 'Origin', 10, true));
    this.regions[0]._polity = this.polities[0];


    this.selectedPolity = this.polities[0];
    this.selectedPolity._selected = 'selected';
    
    //ADD RIVERS
    this.rivers.forEach((river) => {
      this.drawRivers(river.riverDrawing());
      //MUST CONSOLIDATE YIELDS FROM DIFFERENT RIVERS
      let riverYields = river.tileYields();
      this.regions.forEach((region) => {
        if(riverYields[`${region._col}-${region._row}`] !== undefined){
          region._riverConnections += riverYields[`${region._col}-${region._row}`];
          // console.log(region.id + " has " + region._riverConnections + " connections!");
        }
      })
      // console.log(river.tileYields());
    })

  }

  recievePolity($event) {
    this.regions.forEach((region) => {
      if(region._polity !== $event){region._polity._selected = 'not-selected';}
    })
    this.selectedPolity = $event;
  }

  getRegionById(id){
    //creating a fake deault region return probably BAD idea...
    let returnedRegion:Region = new Region(0,0, continental, new NoPolity());
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
      this.polities.forEach((polity) => { 
        polity.act(this.regions); 
      })
      // 3. REGIONS ACT
      this.regions.forEach((region) => { 
        // ADD NEW REGIONS TO MAIN ARRAY
        if(!region._polity._partOfMainArray && region._polity.polityType !== 'None'){
          this.polities.push(region._polity)
          region._polity._partOfMainArray = true;
        }
        region.replenishFood(); 
      })
      // 4. REMOVE DEAD POLITIES
      this.polities.forEach((polity,index) => {
        //remove any polities without any people
        if(polity._population <= 1 && polity !== undefined && polity.polityType !== 'None'){
          polity._region._polity = new NoPolity();
          this.polities.splice(index,1);
        }
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
    //ADJUST FOR NEW ID SYSTEM
    this.regions.forEach((region) => {
      if(riverLines[`${region._col}-${region._row}`] !== undefined){
        for(let i=0; i < riverLines[`${region._col}-${region._row}`].length; i++){
          // console.log('hit' + ' ' + region.id + ' ' + riverLines[`${region._col}-${region._row}`][i]);
          region._borders[i] = riverLines[`${region._col}-${region._row}`][i];
         }
      }
    })
  }
}
