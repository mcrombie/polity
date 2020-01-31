import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})

export class TileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log("YOU CLICKED ME!")
  }

}

import { Polity, Band } from '../polity/polity.component';

const DEFAULT_SPACE: number = 10;
const DEFAULT_MAX_FORAGE_YIELD = 100;

export class Tile {
  public _polity: Polity;
  public _settled:boolean;
  private _space: number;
  private _maxForageYield;
  constructor(private _id: number) {
    this._polity = new Band(10, 10, "Tanky");
    this._settled = this.checkIfSettled();
    this._space = DEFAULT_SPACE;
    this._maxForageYield = DEFAULT_MAX_FORAGE_YIELD;
  }

  //GETTERS AND SETTERS FOR PRIVATE PROPERTIES
  get id() { return this._id };
  set id(value) { this._id = value; };
  get space() { return this._space };
  set space(value) { this._space = value; };
  get maxForageYield() { return this._maxForageYield };
  set maxForageYield(value) { this._maxForageYield = value; };

  //RESET SPACE
  resetSpace() {
    this.space = DEFAULT_SPACE;
  }

  checkIfSettled(){
    return typeof this._polity === 'undefined' ? false: true;
  }

}


