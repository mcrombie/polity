import { Component } from '@angular/core';
import { Region } from './region/region';
import { dry, ocean, temperate } from './region/climate';
import { Polity } from './polity/polity';
import { fertileCrescent } from './savedMaps/fertileCrescent';
import { testMap } from './savedMaps/testMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root-of-civilization';
  savedMap = testMap;
  
}

