import { Component, OnInit } from '@angular/core';
import { Polity, Band } from '../polity/polity';
import { TileComponent } from '../tile/tile.component';
import { Region } from '../region/region';


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

  public regions:Region[] = [
    new Region("A1"),
    new Region("A2"),
    new Region("A3"),
    new Region("B1"),
    new Region("B2"),
    new Region("B3"),
    new Region("C1"),
    new Region("C2"),
    new Region("C3")
  ];

  
  public polities = [new Band(this.regions[4], 10, 0, 'Tanky')];
 


  
  constructor() { 
    
  }

  public selectedPolity:Polity = new Polity();

  ngOnInit() {
    this.regions[4]._polity = this.polities[0];
  }


  recievePolity($event){
    this.selectedPolity = $event;
  }

  forwardOneYear(){
    this.regions.forEach((region) => {
      region._polity.act(this.regions, region);
      region._polity.populationGrowth();
    })

  }
  

}
