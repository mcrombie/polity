import { Component } from '@angular/core';
import { Region } from './region/region';
import { dry, ocean, temperate, continental, polar, tropical } from './region/climate';
import { Polity } from './polity/polity';
import { fertileCrescent } from './savedMaps/fertileCrescent';
import { testMap } from './savedMaps/testMap';
import { emptyOcean } from './savedMaps/emptyOcean';
import { singleTileContinental } from './savedMaps/singleTileContinental';
import { singleTileTemperate } from './savedMaps/singleTileTemperate';
import { singleTileDry } from './savedMaps/singleTileDry';
import { fiveTileContinental } from './savedMaps/fiveTileContinental';
import { fiveTileTemperate } from './savedMaps/fiveTileTemperate';
import { allClimates } from './savedMaps/allClimates';
import { allClimatesRiver } from './savedMaps/allClimatesRiver';
import { iceAgeFertileCrescent } from './savedMaps/iceAgeFertileCrescent';
import { china } from './savedMaps/china';
import { mesoAmerica } from './savedMaps/mesoAmerica';
import { NoPolity } from './polity/noPolity';
import { sampleIsland } from './savedMaps/sampleIsland';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root-of-civilization';
  fertileCrescentMap = fertileCrescent;
  iceAgeFertileCrescentMap = iceAgeFertileCrescent;
  chinaMap = china;
  mesoAmericaMap = mesoAmerica;
  testMapMap = testMap;
  emptyOceanMap = emptyOcean;
  singleTileContinentalMap = singleTileContinental;
  singleTileTemperateMap = singleTileTemperate;
  singleTileDryMap = singleTileDry;
  fiveTileContinentalMap = fiveTileContinental;
  fiveTileTemperateMap = fiveTileTemperate;
  allClimatesMap = allClimates;
  allClimatesRiverMap = allClimatesRiver;
  sampleIslandMap = sampleIsland;

  public temperateSample = new Region(0,0,temperate, new NoPolity());
  public continentalSample = new Region(0,0,continental, new NoPolity());
  public drySample = new Region(0,0,dry, new NoPolity());
  public tropicalSample = new Region(0,0,tropical, new NoPolity());
  public polarSample = new Region(0,0,polar, new NoPolity());
  public oceanSample = new Region(0,0,ocean, new NoPolity());
  
}

