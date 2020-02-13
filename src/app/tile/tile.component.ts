import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Polity} from '../polity/polity';
import { Region } from '../region/region';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})

export class TileComponent implements OnInit {
  @Input() public _region: Region;
  public trees = Array.from(Array(1).keys());
  public selected:string = 'not-selected';


  //@Output() tileInformation = new EventEmitter<TileComponent>();
  @Output() selectedPolity = new EventEmitter<Polity>();

  constructor() {
  }

  ngOnInit() {
  }



  clicked() {
    //console.log(`Region ID-${this._region.id} with polity of ${this._region._polity._name}.`);
    this.selectedPolity.emit(this._region._polity);
    this._region._polity._selected = 'selected';
    //console.log(`YOU CLICKED TILE-${this._id}! It has a polity of ${this._polity._name} and a food store of ${this._polity._food}`);
  }



}

