import { enableProdMode, ElementRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {Polity} from './app/polity/polity';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*******************
 * POLITY SIMULATION
 *******************/

// for(let i=0; i< tiles.length; i++){
//   let tile = tiles[i];
//   console.log(`yo`);
// }
// let tanky = new Band(10,10, "Tanky");
// let tile = new Tile(1);


// //iterate over each polity in the tile
// for (let i = 0; i < 100; i++){
//   console.log(`THIS IS YEAR ${i}`);
//   console.log(`SETTLED STATUS = ${tile._settled}`)
//   if(tile._polity){
    
//     tile._polity.details();
    
//     tile._polity.act(tile);
//     tile._polity.populationGrowth();
    
//     // console.log(`Tile-${tile.id} has ${tile.space} space left.`)
//     tile.resetSpace();
//   }
  
// }
