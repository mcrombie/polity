import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {Polity, Band} from './polities/polity';
import {Tile} from './tiles/tile';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*******************
 * POLITY SIMULATION
 *******************/
let tanky = new Band(10,10, "Tanky");

let tile = new Tile(1, [tanky]);

//iterate over each polity in the tile
for (let i = 0; i < 100; i++){
  console.log(`THIS IS YEAR ${i}`);
  let polities = tile._polities;
  polities[0].details();
  
  polities[0].act(tile);
  polities[0].populationGrowth();
  
  // console.log(`Tile-${tile.id} has ${tile.space} space left.`)
  tile.resetSpace();
  
  
}
