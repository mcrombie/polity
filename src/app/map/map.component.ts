import { Component, OnInit } from '@angular/core';
import { Polity, Band } from '../polity/polity';
import { TileComponent } from '../tile/tile.component';
import { Region } from '../region/region';
import { ContinentalClimate } from '../region/climates/continentalClimate';
import { TemperateClimate } from '../region/climates/temperateClimate';



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
  public regions:Region[] = [
    new ContinentalClimate("A1"),
    new ContinentalClimate("B1"),
    new ContinentalClimate("C1"),
    new ContinentalClimate("D1"),
    new ContinentalClimate("A2"),
    new ContinentalClimate("B2"),
    new ContinentalClimate("C2"),
    new ContinentalClimate("D2"),
    new ContinentalClimate("A3"),
    new ContinentalClimate("B3"),
    new ContinentalClimate("C3"),
    new ContinentalClimate("D3"),
    new ContinentalClimate("A4"),
    new ContinentalClimate("B4"),
    new ContinentalClimate("C4"),
    new TemperateClimate("D4")
  ];

  
  public polities = [new Band(this.regions[4], 10, 0, 'Origin')];
  public selectedPolity:Polity = new Polity();


  constructor() { 
    //DEVELOP MAP GENERATION LATER
  }


  ngOnInit() {
    this.regions[4]._polity = this.polities[0];
  }


  recievePolity($event){
    this.selectedPolity = $event;
  }

  forwardYears(number){
    //UPDATE YEAR
    this.year+=number;
    //ENTITIES ACT
    for(let i = 0; i < number; i++){
      this.regions.forEach((region) => {
        if(!region._polity._hasMoved){
          region._polity.act(this.regions, region);
          region._polity.populationGrowth();
          region._polity.freeAction(this.regions, region);
        }
        region.replenishFood();
      })
      // RESET POLITY MOVEMENT BOOLEAN
      this.regions.forEach((region) => {region._polity._hasMoved = false;})
    }

  }
  

}
