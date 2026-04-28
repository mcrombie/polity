import { Region } from '../region';
import { Polity } from '../polity';
import { ocean, temperate, dry, continental, tropical, polar } from '../climate';
import { River, euphrates, tigris, jordan, yellowRiver, yangtzeRiver, lakeTexcoco1, lakeTexcoco2 } from '../river';
import { Intersection } from '../intersection';

// Helper to build a 12x12 grid with custom overrides
// overrides: array of [col, row, climate, label?]
type Override = [number, number, typeof ocean, string?];

function makeGrid(overrides: Override[]): Region[] {
  const overrideMap = new Map<string, Override>();
  for (const o of overrides) {
    overrideMap.set(`${o[0]}-${o[1]}`, o);
  }
  const regions: Region[] = [];
  for (let row = 1; row <= 12; row++) {
    for (let col = 1; col <= 12; col++) {
      const key = `${col}-${row}`;
      const o = overrideMap.get(key);
      if (o) regions.push(new Region(col, row, o[2], new Polity(), o[3]));
      else regions.push(new Region(col, row, ocean, new Polity()));
    }
  }
  return regions;
}

// ─── SAMPLE ISLAND ────────────────────────────────────────────────────────────
export function createSampleIslandRegions(): Region[] {
  return [
    new Region(1,1, ocean, new Polity()),new Region(2,1, ocean, new Polity()),new Region(3,1, ocean, new Polity()),new Region(4,1, ocean, new Polity()),new Region(5,1, ocean, new Polity()),new Region(6,1, ocean, new Polity()),new Region(7,1, ocean, new Polity()),new Region(8,1, ocean, new Polity()),new Region(9,1, ocean, new Polity()),new Region(10,1, ocean, new Polity()),new Region(11,1, ocean, new Polity()),new Region(12,1, ocean, new Polity()),
    new Region(1,2, ocean, new Polity()),new Region(2,2, ocean, new Polity()),new Region(3,2, ocean, new Polity()),new Region(4,2, ocean, new Polity()),new Region(5,2, ocean, new Polity()),new Region(6,2, ocean, new Polity()),new Region(7,2, ocean, new Polity()),new Region(8,2, ocean, new Polity()),new Region(9,2, ocean, new Polity()),new Region(10,2, ocean, new Polity()),new Region(11,2, continental, new Polity()),new Region(12,2, ocean, new Polity()),
    new Region(1,3, ocean, new Polity()),new Region(2,3, ocean, new Polity()),new Region(3,3, ocean, new Polity()),new Region(4,3, ocean, new Polity()),new Region(5,3, ocean, new Polity()),new Region(6,3, ocean, new Polity()),new Region(7,3, ocean, new Polity()),new Region(8,3, ocean, new Polity()),new Region(9,3, ocean, new Polity()),new Region(10,3, ocean, new Polity()),new Region(11,3, temperate, new Polity()),new Region(12,3, ocean, new Polity()),
    new Region(1,4, ocean, new Polity()),new Region(2,4, ocean, new Polity()),new Region(3,4, ocean, new Polity()),new Region(4,4, tropical, new Polity()),new Region(5,4, tropical, new Polity()),new Region(6,4, ocean, new Polity()),new Region(7,4, ocean, new Polity()),new Region(8,4, ocean, new Polity()),new Region(9,4, ocean, new Polity()),new Region(10,4, ocean, new Polity()),new Region(11,4, ocean, new Polity()),new Region(12,4, ocean, new Polity()),
    new Region(1,5, ocean, new Polity()),new Region(2,5, ocean, new Polity()),new Region(3,5, tropical, new Polity()),new Region(4,5, tropical, new Polity()),new Region(5,5, tropical, new Polity()),new Region(6,5, tropical, new Polity()),new Region(7,5, tropical, new Polity()),new Region(8,5, tropical, new Polity()),new Region(9,5, ocean, new Polity()),new Region(10,5, ocean, new Polity()),new Region(11,5, ocean, new Polity()),new Region(12,5, ocean, new Polity()),
    new Region(1,6, ocean, new Polity()),new Region(2,6, ocean, new Polity()),new Region(3,6, tropical, new Polity()),new Region(4,6, tropical, new Polity()),new Region(5,6, temperate, new Polity()),new Region(6,6, temperate, new Polity()),new Region(7,6, temperate, new Polity()),new Region(8,6, tropical, new Polity()),new Region(9,6, tropical, new Polity()),new Region(10,6, ocean, new Polity()),new Region(11,6, ocean, new Polity()),new Region(12,6, ocean, new Polity()),
    new Region(1,7, ocean, new Polity()),new Region(2,7, ocean, new Polity()),new Region(3,7, tropical, new Polity()),new Region(4,7, tropical, new Polity()),new Region(5,7, temperate, new Polity()),new Region(6,7, temperate, new Polity()),new Region(7,7, temperate, new Polity()),new Region(8,7, tropical, new Polity()),new Region(9,7, tropical, new Polity()),new Region(10,7, ocean, new Polity()),new Region(11,7, ocean, new Polity()),new Region(12,7, ocean, new Polity()),
    new Region(1,8, ocean, new Polity()),new Region(2,8, ocean, new Polity()),new Region(3,8, ocean, new Polity()),new Region(4,8, tropical, new Polity()),new Region(5,8, ocean, new Polity()),new Region(6,8, ocean, new Polity()),new Region(7,8, tropical, new Polity()),new Region(8,8, tropical, new Polity()),new Region(9,8, ocean, new Polity()),new Region(10,8, ocean, new Polity()),new Region(11,8, ocean, new Polity()),new Region(12,8, ocean, new Polity()),
    new Region(1,9, ocean, new Polity()),new Region(2,9, ocean, new Polity()),new Region(3,9, ocean, new Polity()),new Region(4,9, ocean, new Polity()),new Region(5,9, ocean, new Polity()),new Region(6,9, ocean, new Polity()),new Region(7,9, ocean, new Polity()),new Region(8,9, ocean, new Polity()),new Region(9,9, ocean, new Polity()),new Region(10,9, ocean, new Polity()),new Region(11,9, tropical, new Polity()),new Region(12,9, ocean, new Polity()),
    new Region(1,10, ocean, new Polity()),new Region(2,10, ocean, new Polity()),new Region(3,10, ocean, new Polity()),new Region(4,10, ocean, new Polity()),new Region(5,10, tropical, new Polity()),new Region(6,10, ocean, new Polity()),new Region(7,10, ocean, new Polity()),new Region(8,10, ocean, new Polity()),new Region(9,10, ocean, new Polity()),new Region(10,10, ocean, new Polity()),new Region(11,10, ocean, new Polity()),new Region(12,10, ocean, new Polity()),
    new Region(1,11, ocean, new Polity()),new Region(2,11, ocean, new Polity()),new Region(3,11, dry, new Polity()),new Region(4,11, ocean, new Polity()),new Region(5,11, ocean, new Polity()),new Region(6,11, ocean, new Polity()),new Region(7,11, tropical, new Polity()),new Region(8,11, dry, new Polity()),new Region(9,11, dry, new Polity()),new Region(10,11, ocean, new Polity()),new Region(11,11, ocean, new Polity()),new Region(12,11, ocean, new Polity()),
    new Region(1,12, ocean, new Polity()),new Region(2,12, ocean, new Polity()),new Region(3,12, ocean, new Polity()),new Region(4,12, ocean, new Polity()),new Region(5,12, ocean, new Polity()),new Region(6,12, ocean, new Polity()),new Region(7,12, ocean, new Polity()),new Region(8,12, ocean, new Polity()),new Region(9,12, ocean, new Polity()),new Region(10,12, ocean, new Polity()),new Region(11,12, ocean, new Polity()),new Region(12,12, ocean, new Polity()),
  ];
}

export const sampleIslandRivers: River[] = [
  new River([
    new Intersection([4,4],[5,4],[4,5],[5,5]),
    new Intersection([4,5],[5,5],[4,6],[5,6]),
    new Intersection([4,6],[5,6],[4,7],[5,7]),
    new Intersection([4,7],[5,7],[4,8],[5,8]),
  ]),
  new River([
    new Intersection([8,5],[9,5],[8,6],[9,6]),
    new Intersection([7,5],[8,5],[7,6],[8,6]),
    new Intersection([7,6],[8,6],[7,7],[8,7]),
    new Intersection([7,7],[8,7],[7,8],[8,8]),
    new Intersection([7,8],[8,8],[7,9],[8,9]),
  ]),
];

// ─── FERTILE CRESCENT ─────────────────────────────────────────────────────────
export function createFertileCrescentRegions(): Region[] {
  return [
    new Region(1,1, dry, new Polity()),new Region(2,1, dry, new Polity()),new Region(3,1, dry, new Polity()),new Region(4,1, dry, new Polity()),new Region(5,1, dry, new Polity()),new Region(6,1, dry, new Polity()),new Region(7,1, dry, new Polity()),new Region(8,1, dry, new Polity()),new Region(9,1, dry, new Polity()),new Region(10,1, dry, new Polity()),new Region(11,1, dry, new Polity()),new Region(12,1, dry, new Polity()),
    new Region(1,2, ocean, new Polity()),new Region(2,2, temperate, new Polity()),new Region(3,2, temperate, new Polity()),new Region(4,2, temperate, new Polity()),new Region(5,2, temperate, new Polity()),new Region(6,2, temperate, new Polity()),new Region(7,2, temperate, new Polity()),new Region(8,2, temperate, new Polity()),new Region(9,2, dry, new Polity()),new Region(10,2, dry, new Polity()),new Region(11,2, dry, new Polity()),new Region(12,2, dry, new Polity()),
    new Region(1,3, ocean, new Polity()),new Region(2,3, temperate, new Polity()),new Region(3,3, temperate, new Polity()),new Region(4,3, temperate, new Polity()),new Region(5,3, temperate, new Polity()),new Region(6,3, temperate, new Polity()),new Region(7,3, temperate, new Polity()),new Region(8,3, temperate, new Polity()),new Region(9,3, temperate, new Polity()),new Region(10,3, dry, new Polity()),new Region(11,3, dry, new Polity()),new Region(12,3, dry, new Polity()),
    new Region(1,4, ocean, new Polity()),new Region(2,4, temperate, new Polity()),new Region(3,4, temperate, new Polity()),new Region(4,4, temperate, new Polity()),new Region(5,4, temperate, new Polity()),new Region(6,4, temperate, new Polity()),new Region(7,4, temperate, new Polity()),new Region(8,4, temperate, new Polity()),new Region(9,4, temperate, new Polity(),"Tigris River"),new Region(10,4, temperate, new Polity()),new Region(11,4, dry, new Polity()),new Region(12,4, dry, new Polity()),
    new Region(1,5, ocean, new Polity()),new Region(2,5, temperate, new Polity()),new Region(3,5, temperate, new Polity()),new Region(4,5, dry, new Polity()),new Region(5,5, temperate, new Polity()),new Region(6,5, temperate, new Polity()),new Region(7,5, temperate, new Polity()),new Region(8,5, temperate, new Polity(),"Mesopotamia"),new Region(9,5, temperate, new Polity()),new Region(10,5, temperate, new Polity()),new Region(11,5, dry, new Polity()),new Region(12,5, dry, new Polity()),
    new Region(1,6, ocean, new Polity(),"Mediterranean Sea"),new Region(2,6, temperate, new Polity()),new Region(3,6, temperate, new Polity()),new Region(4,6, dry, new Polity()),new Region(5,6, dry, new Polity()),new Region(6,6, temperate, new Polity()),new Region(7,6, temperate, new Polity(),"Euphrates River"),new Region(8,6, temperate, new Polity()),new Region(9,6, temperate, new Polity()),new Region(10,6, temperate, new Polity()),new Region(11,6, dry, new Polity()),new Region(12,6, dry, new Polity()),
    new Region(1,7, ocean, new Polity()),new Region(2,7, temperate, new Polity()),new Region(3,7, temperate, new Polity()),new Region(4,7, dry, new Polity()),new Region(5,7, dry, new Polity()),new Region(6,7, dry, new Polity()),new Region(7,7, temperate, new Polity()),new Region(8,7, temperate, new Polity()),new Region(9,7, temperate, new Polity()),new Region(10,7, temperate, new Polity()),new Region(11,7, temperate, new Polity()),new Region(12,7, dry, new Polity()),
    new Region(1,8, ocean, new Polity()),new Region(2,8, temperate, new Polity()),new Region(3,8, temperate, new Polity(),"Jordan River"),new Region(4,8, dry, new Polity()),new Region(5,8, dry, new Polity()),new Region(6,8, dry, new Polity()),new Region(7,8, dry, new Polity()),new Region(8,8, temperate, new Polity()),new Region(9,8, temperate, new Polity()),new Region(10,8, temperate, new Polity()),new Region(11,8, temperate, new Polity()),new Region(12,8, temperate, new Polity()),
    new Region(1,9, ocean, new Polity()),new Region(2,9, temperate, new Polity()),new Region(3,9, ocean, new Polity(),"Dead Sea"),new Region(4,9, dry, new Polity()),new Region(5,9, dry, new Polity()),new Region(6,9, dry, new Polity()),new Region(7,9, dry, new Polity()),new Region(8,9, temperate, new Polity()),new Region(9,9, temperate, new Polity()),new Region(10,9, temperate, new Polity()),new Region(11,9, temperate, new Polity()),new Region(12,9, temperate, new Polity()),
    new Region(1,10, temperate, new Polity()),new Region(2,10, temperate, new Polity()),new Region(3,10, dry, new Polity()),new Region(4,10, dry, new Polity()),new Region(5,10, dry, new Polity()),new Region(6,10, dry, new Polity()),new Region(7,10, dry, new Polity()),new Region(8,10, dry, new Polity()),new Region(9,10, temperate, new Polity()),new Region(10,10, temperate, new Polity()),new Region(11,10, ocean, new Polity()),new Region(12,10, ocean, new Polity(),"Persian Gulf"),
    new Region(1,11, dry, new Polity()),new Region(2,11, dry, new Polity()),new Region(3,11, dry, new Polity()),new Region(4,11, dry, new Polity()),new Region(5,11, dry, new Polity()),new Region(6,11, dry, new Polity(),"Arabian Desert"),new Region(7,11, dry, new Polity()),new Region(8,11, dry, new Polity()),new Region(9,11, dry, new Polity()),new Region(10,11, dry, new Polity()),new Region(11,11, dry, new Polity()),new Region(12,11, ocean, new Polity()),
    new Region(1,12, dry, new Polity()),new Region(2,12, ocean, new Polity()),new Region(3,12, dry, new Polity()),new Region(4,12, dry, new Polity()),new Region(5,12, dry, new Polity()),new Region(6,12, dry, new Polity()),new Region(7,12, dry, new Polity()),new Region(8,12, dry, new Polity()),new Region(9,12, dry, new Polity()),new Region(10,12, dry, new Polity()),new Region(11,12, dry, new Polity()),new Region(12,12, dry, new Polity()),
  ];
}
export const fertileCrescentRivers = [euphrates, tigris, jordan];

// ─── ICE AGE FERTILE CRESCENT ─────────────────────────────────────────────────
export function createIceAgeFertileCrescentRegions(): Region[] {
  return [
    new Region(1,1, polar, new Polity()),new Region(2,1, polar, new Polity()),new Region(3,1, polar, new Polity()),new Region(4,1, polar, new Polity()),new Region(5,1, polar, new Polity()),new Region(6,1, polar, new Polity()),new Region(7,1, polar, new Polity()),new Region(8,1, polar, new Polity()),new Region(9,1, polar, new Polity()),new Region(10,1, polar, new Polity()),new Region(11,1, polar, new Polity()),new Region(12,1, polar, new Polity()),
    new Region(1,2, ocean, new Polity()),new Region(2,2, continental, new Polity()),new Region(3,2, continental, new Polity()),new Region(4,2, continental, new Polity()),new Region(5,2, continental, new Polity()),new Region(6,2, continental, new Polity()),new Region(7,2, continental, new Polity()),new Region(8,2, continental, new Polity()),new Region(9,2, continental, new Polity()),new Region(10,2, continental, new Polity()),new Region(11,2, continental, new Polity()),new Region(12,2, continental, new Polity()),
    new Region(1,3, ocean, new Polity()),new Region(2,3, continental, new Polity()),new Region(3,3, continental, new Polity()),new Region(4,3, continental, new Polity()),new Region(5,3, continental, new Polity()),new Region(6,3, continental, new Polity()),new Region(7,3, continental, new Polity()),new Region(8,3, continental, new Polity()),new Region(9,3, continental, new Polity()),new Region(10,3, continental, new Polity()),new Region(11,3, continental, new Polity()),new Region(12,3, continental, new Polity()),
    new Region(1,4, ocean, new Polity()),new Region(2,4, continental, new Polity()),new Region(3,4, continental, new Polity()),new Region(4,4, continental, new Polity()),new Region(5,4, continental, new Polity()),new Region(6,4, continental, new Polity()),new Region(7,4, continental, new Polity()),new Region(8,4, continental, new Polity()),new Region(9,4, continental, new Polity(),"Tigris River"),new Region(10,4, continental, new Polity()),new Region(11,4, continental, new Polity()),new Region(12,4, continental, new Polity()),
    new Region(1,5, ocean, new Polity()),new Region(2,5, continental, new Polity()),new Region(3,5, continental, new Polity()),new Region(4,5, continental, new Polity()),new Region(5,5, continental, new Polity()),new Region(6,5, continental, new Polity()),new Region(7,5, continental, new Polity()),new Region(8,5, continental, new Polity(),"Mesopotamia"),new Region(9,5, continental, new Polity()),new Region(10,5, continental, new Polity()),new Region(11,5, continental, new Polity()),new Region(12,5, continental, new Polity()),
    new Region(1,6, ocean, new Polity(),"Mediterranean Sea"),new Region(2,6, continental, new Polity()),new Region(3,6, continental, new Polity()),new Region(4,6, continental, new Polity()),new Region(5,6, continental, new Polity()),new Region(6,6, continental, new Polity()),new Region(7,6, continental, new Polity(),"Euphrates River"),new Region(8,6, continental, new Polity()),new Region(9,6, continental, new Polity()),new Region(10,6, continental, new Polity()),new Region(11,6, continental, new Polity()),new Region(12,6, continental, new Polity()),
    new Region(1,7, ocean, new Polity()),new Region(2,7, continental, new Polity()),new Region(3,7, continental, new Polity()),new Region(4,7, continental, new Polity()),new Region(5,7, continental, new Polity()),new Region(6,7, continental, new Polity()),new Region(7,7, continental, new Polity()),new Region(8,7, continental, new Polity()),new Region(9,7, continental, new Polity()),new Region(10,7, continental, new Polity()),new Region(11,7, continental, new Polity()),new Region(12,7, continental, new Polity()),
    new Region(1,8, ocean, new Polity()),new Region(2,8, continental, new Polity()),new Region(3,8, continental, new Polity(),"Jordan River"),new Region(4,8, dry, new Polity()),new Region(5,8, dry, new Polity()),new Region(6,8, dry, new Polity()),new Region(7,8, dry, new Polity()),new Region(8,8, continental, new Polity()),new Region(9,8, continental, new Polity()),new Region(10,8, continental, new Polity()),new Region(11,8, continental, new Polity()),new Region(12,8, continental, new Polity()),
    new Region(1,9, ocean, new Polity()),new Region(2,9, continental, new Polity()),new Region(3,9, ocean, new Polity(),"Dead Sea"),new Region(4,9, dry, new Polity()),new Region(5,9, dry, new Polity()),new Region(6,9, dry, new Polity()),new Region(7,9, dry, new Polity()),new Region(8,9, continental, new Polity()),new Region(9,9, continental, new Polity()),new Region(10,9, continental, new Polity()),new Region(11,9, continental, new Polity()),new Region(12,9, continental, new Polity()),
    new Region(1,10, continental, new Polity()),new Region(2,10, continental, new Polity()),new Region(3,10, dry, new Polity()),new Region(4,10, dry, new Polity()),new Region(5,10, dry, new Polity()),new Region(6,10, dry, new Polity()),new Region(7,10, dry, new Polity()),new Region(8,10, dry, new Polity()),new Region(9,10, continental, new Polity()),new Region(10,10, continental, new Polity()),new Region(11,10, ocean, new Polity()),new Region(12,10, ocean, new Polity(),"Persian Gulf"),
    new Region(1,11, dry, new Polity()),new Region(2,11, dry, new Polity()),new Region(3,11, dry, new Polity()),new Region(4,11, dry, new Polity()),new Region(5,11, dry, new Polity()),new Region(6,11, dry, new Polity(),"Arabian Desert"),new Region(7,11, dry, new Polity()),new Region(8,11, dry, new Polity()),new Region(9,11, dry, new Polity()),new Region(10,11, dry, new Polity()),new Region(11,11, dry, new Polity()),new Region(12,11, ocean, new Polity()),
    new Region(1,12, dry, new Polity()),new Region(2,12, ocean, new Polity()),new Region(3,12, dry, new Polity()),new Region(4,12, dry, new Polity()),new Region(5,12, dry, new Polity()),new Region(6,12, dry, new Polity()),new Region(7,12, dry, new Polity()),new Region(8,12, dry, new Polity()),new Region(9,12, dry, new Polity()),new Region(10,12, dry, new Polity()),new Region(11,12, dry, new Polity()),new Region(12,12, dry, new Polity()),
  ];
}
export const iceAgeFertileCrescentRivers = [euphrates, tigris, jordan];

// ─── SIMPLE SINGLE-TILE MAPS ──────────────────────────────────────────────────
function makeSingleTileGrid(climate: typeof ocean): Region[] {
  const regions: Region[] = [];
  for (let row = 1; row <= 12; row++) {
    for (let col = 1; col <= 12; col++) {
      const isCenter = col === 6 && row === 6;
      regions.push(new Region(col, row, isCenter ? climate : ocean, new Polity()));
    }
  }
  return regions;
}

export function createSingleTileContinentalRegions(): Region[] { return makeSingleTileGrid(continental); }
export function createSingleTileTemperateRegions(): Region[] { return makeSingleTileGrid(temperate); }
export function createSingleTileDryRegions(): Region[] { return makeSingleTileGrid(dry); }
export const singleTileRivers: River[] = [];

// ─── FIVE TILE MAPS ────────────────────────────────────────────────────────────
function makeFiveTileGrid(climate: typeof ocean): Region[] {
  const fiveTiles = new Set(['5-6','6-6','7-6','6-7','7-7']);
  const regions: Region[] = [];
  for (let row = 1; row <= 12; row++) {
    for (let col = 1; col <= 12; col++) {
      const key = `${col}-${row}`;
      regions.push(new Region(col, row, fiveTiles.has(key) ? climate : ocean, new Polity()));
    }
  }
  return regions;
}

export function createFiveTileContinentalRegions(): Region[] { return makeFiveTileGrid(continental); }
export function createFiveTileTemperateRegions(): Region[] { return makeFiveTileGrid(temperate); }
export const fiveTileRivers: River[] = [];

// ─── ALL CLIMATES ─────────────────────────────────────────────────────────────
function makeAllClimatesGrid(): Region[] {
  const climateMap: Record<string, typeof ocean> = {
    '4-4': polar,'5-4': polar,'6-4': polar,'7-4': polar,'8-4': polar,
    '4-5': continental,'5-5': continental,'6-5': continental,'7-5': continental,'8-5': continental,
    '4-6': temperate,'5-6': temperate,'6-6': temperate,'7-6': temperate,'8-6': temperate,
    '4-7': dry,'5-7': dry,'6-7': dry,'7-7': dry,'8-7': dry,
    '4-8': tropical,'5-8': tropical,'6-8': tropical,'7-8': tropical,'8-8': tropical,
  };
  const regions: Region[] = [];
  for (let row = 1; row <= 12; row++) {
    for (let col = 1; col <= 12; col++) {
      const key = `${col}-${row}`;
      regions.push(new Region(col, row, climateMap[key] ?? ocean, new Polity()));
    }
  }
  return regions;
}

export function createAllClimatesRegions(): Region[] { return makeAllClimatesGrid(); }
export const allClimatesRivers: River[] = [];

export function createAllClimatesRiverRegions(): Region[] { return makeAllClimatesGrid(); }
export const allClimatesRiverRivers: River[] = [
  new River([
    new Intersection([4,4],[5,4],[4,5],[5,5]),
    new Intersection([4,5],[5,5],[4,6],[5,6]),
    new Intersection([5,5],[6,5],[5,6],[6,6]),
    new Intersection([5,6],[6,6],[5,7],[6,7]),
    new Intersection([6,6],[7,6],[6,7],[7,7]),
    new Intersection([6,7],[7,7],[6,8],[7,8]),
    new Intersection([7,7],[8,7],[7,8],[8,8]),
    new Intersection([7,8],[8,8],[7,9],[8,9]),
  ]),
];

// ─── CHINA ────────────────────────────────────────────────────────────────────
export function createChinaRegions(): Region[] {
  return [
    new Region(1,1, dry, new Polity()),new Region(2,1, dry, new Polity()),new Region(3,1, dry, new Polity()),new Region(4,1, dry, new Polity()),new Region(5,1, dry, new Polity()),new Region(6,1, dry, new Polity()),new Region(7,1, dry, new Polity()),new Region(8,1, dry, new Polity()),new Region(9,1, dry, new Polity()),new Region(10,1, continental, new Polity()),new Region(11,1, continental, new Polity(),"Manchuria"),new Region(12,1, continental, new Polity()),
    new Region(1,2, dry, new Polity()),new Region(2,2, dry, new Polity()),new Region(3,2, dry, new Polity()),new Region(4,2, dry, new Polity()),new Region(5,2, dry, new Polity(),"Gobi Desert"),new Region(6,2, dry, new Polity()),new Region(7,2, temperate, new Polity()),new Region(8,2, temperate, new Polity()),new Region(9,2, temperate, new Polity()),new Region(10,2, ocean, new Polity()),new Region(11,2, temperate, new Polity()),new Region(12,2, ocean, new Polity()),
    new Region(1,3, dry, new Polity()),new Region(2,3, dry, new Polity()),new Region(3,3, dry, new Polity()),new Region(4,3, dry, new Polity()),new Region(5,3, dry, new Polity()),new Region(6,3, dry, new Polity()),new Region(7,3, temperate, new Polity()),new Region(8,3, temperate, new Polity()),new Region(9,3, temperate, new Polity()),new Region(10,3, ocean, new Polity()),new Region(11,3, ocean, new Polity(),"Yellow Sea"),new Region(12,3, ocean, new Polity()),
    new Region(1,4, dry, new Polity()),new Region(2,4, dry, new Polity()),new Region(3,4, dry, new Polity()),new Region(4,4, dry, new Polity()),new Region(5,4, dry, new Polity()),new Region(6,4, dry, new Polity()),new Region(7,4, temperate, new Polity(),"Yellow River"),new Region(8,4, temperate, new Polity()),new Region(9,4, temperate, new Polity()),new Region(10,4, temperate, new Polity()),new Region(11,4, ocean, new Polity()),new Region(12,4, ocean, new Polity()),
    new Region(1,5, dry, new Polity()),new Region(2,5, dry, new Polity()),new Region(3,5, dry, new Polity()),new Region(4,5, dry, new Polity()),new Region(5,5, dry, new Polity()),new Region(6,5, temperate, new Polity()),new Region(7,5, temperate, new Polity()),new Region(8,5, temperate, new Polity(),"North China Plain"),new Region(9,5, temperate, new Polity()),new Region(10,5, temperate, new Polity()),new Region(11,5, ocean, new Polity()),new Region(12,5, ocean, new Polity()),
    new Region(1,6, dry, new Polity()),new Region(2,6, dry, new Polity()),new Region(3,6, dry, new Polity()),new Region(4,6, dry, new Polity()),new Region(5,6, dry, new Polity()),new Region(6,6, temperate, new Polity()),new Region(7,6, temperate, new Polity()),new Region(8,6, temperate, new Polity()),new Region(9,6, temperate, new Polity()),new Region(10,6, temperate, new Polity()),new Region(11,6, temperate, new Polity()),new Region(12,6, ocean, new Polity()),
    new Region(1,7, dry, new Polity()),new Region(2,7, temperate, new Polity()),new Region(3,7, temperate, new Polity()),new Region(4,7, temperate, new Polity()),new Region(5,7, dry, new Polity()),new Region(6,7, temperate, new Polity()),new Region(7,7, temperate, new Polity()),new Region(8,7, temperate, new Polity()),new Region(9,7, temperate, new Polity()),new Region(10,7, temperate, new Polity()),new Region(11,7, temperate, new Polity()),new Region(12,7, ocean, new Polity(),"East China Sea"),
    new Region(1,8, dry, new Polity()),new Region(2,8, temperate, new Polity()),new Region(3,8, temperate, new Polity(),"Sichuan Basin"),new Region(4,8, dry, new Polity()),new Region(5,8, dry, new Polity()),new Region(6,8, temperate, new Polity()),new Region(7,8, temperate, new Polity(),"Yangtze River"),new Region(8,8, temperate, new Polity()),new Region(9,8, temperate, new Polity()),new Region(10,8, temperate, new Polity()),new Region(11,8, temperate, new Polity()),new Region(12,8, ocean, new Polity()),
    new Region(1,9, dry, new Polity()),new Region(2,9, dry, new Polity()),new Region(3,9, dry, new Polity()),new Region(4,9, dry, new Polity()),new Region(5,9, dry, new Polity()),new Region(6,9, temperate, new Polity()),new Region(7,9, temperate, new Polity()),new Region(8,9, temperate, new Polity()),new Region(9,9, temperate, new Polity()),new Region(10,9, temperate, new Polity()),new Region(11,9, ocean, new Polity()),new Region(12,9, ocean, new Polity()),
    new Region(1,10, dry, new Polity()),new Region(2,10, dry, new Polity()),new Region(3,10, dry, new Polity()),new Region(4,10, dry, new Polity()),new Region(5,10, temperate, new Polity()),new Region(6,10, temperate, new Polity()),new Region(7,10, temperate, new Polity()),new Region(8,10, temperate, new Polity()),new Region(9,10, temperate, new Polity()),new Region(10,10, ocean, new Polity()),new Region(11,10, ocean, new Polity()),new Region(12,10, temperate, new Polity()),
    new Region(1,11, tropical, new Polity()),new Region(2,11, tropical, new Polity()),new Region(3,11, tropical, new Polity()),new Region(4,11, temperate, new Polity()),new Region(5,11, temperate, new Polity()),new Region(6,11, temperate, new Polity()),new Region(7,11, temperate, new Polity()),new Region(8,11, temperate, new Polity()),new Region(9,11, ocean, new Polity()),new Region(10,11, ocean, new Polity()),new Region(11,11, ocean, new Polity()),new Region(12,11, temperate, new Polity(),"Taiwan"),
    new Region(1,12, tropical, new Polity()),new Region(2,12, tropical, new Polity()),new Region(3,12, tropical, new Polity(),"Vietnam"),new Region(4,12, tropical, new Polity()),new Region(5,12, ocean, new Polity()),new Region(6,12, temperate, new Polity(),"Hainan"),new Region(7,12, ocean, new Polity()),new Region(8,12, ocean, new Polity()),new Region(9,12, ocean, new Polity()),new Region(10,12, ocean, new Polity(),"South China Sea"),new Region(11,12, ocean, new Polity()),new Region(12,12, ocean, new Polity()),
  ];
}
export const chinaRivers = [yellowRiver, yangtzeRiver];

// ─── MESOAMERICA ──────────────────────────────────────────────────────────────
export function createMesoAmericaRegions(): Region[] {
  return [
    new Region(1,1, dry, new Polity()),new Region(2,1, dry, new Polity()),new Region(3,1, dry, new Polity()),new Region(4,1, dry, new Polity()),new Region(5,1, dry, new Polity()),new Region(6,1, dry, new Polity()),new Region(7,1, dry, new Polity()),new Region(8,1, dry, new Polity()),new Region(9,1, ocean, new Polity()),new Region(10,1, ocean, new Polity()),new Region(11,1, ocean, new Polity()),new Region(12,1, ocean, new Polity()),
    new Region(1,2, dry, new Polity()),new Region(2,2, dry, new Polity()),new Region(3,2, dry, new Polity()),new Region(4,2, dry, new Polity()),new Region(5,2, dry, new Polity()),new Region(6,2, dry, new Polity()),new Region(7,2, dry, new Polity()),new Region(8,2, dry, new Polity()),new Region(9,2, ocean, new Polity()),new Region(10,2, ocean, new Polity()),new Region(11,2, ocean, new Polity()),new Region(12,2, ocean, new Polity()),
    new Region(1,3, dry, new Polity()),new Region(2,3, dry, new Polity()),new Region(3,3, dry, new Polity()),new Region(4,3, dry, new Polity()),new Region(5,3, dry, new Polity()),new Region(6,3, dry, new Polity()),new Region(7,3, dry, new Polity()),new Region(8,3, temperate, new Polity()),new Region(9,3, ocean, new Polity()),new Region(10,3, ocean, new Polity()),new Region(11,3, ocean, new Polity()),new Region(12,3, ocean, new Polity()),
    new Region(1,4, ocean, new Polity()),new Region(2,4, dry, new Polity()),new Region(3,4, dry, new Polity()),new Region(4,4, dry, new Polity()),new Region(5,4, dry, new Polity()),new Region(6,4, temperate, new Polity()),new Region(7,4, tropical, new Polity()),new Region(8,4, tropical, new Polity()),new Region(9,4, ocean, new Polity()),new Region(10,4, ocean, new Polity()),new Region(11,4, ocean, new Polity(),"Gulf of Mexico"),new Region(12,4, ocean, new Polity()),
    new Region(1,5, ocean, new Polity()),new Region(2,5, dry, new Polity()),new Region(3,5, dry, new Polity()),new Region(4,5, dry, new Polity()),new Region(5,5, dry, new Polity()),new Region(6,5, temperate, new Polity()),new Region(7,5, temperate, new Polity()),new Region(8,5, tropical, new Polity()),new Region(9,5, ocean, new Polity()),new Region(10,5, ocean, new Polity()),new Region(11,5, ocean, new Polity()),new Region(12,5, ocean, new Polity()),
    new Region(1,6, ocean, new Polity()),new Region(2,6, dry, new Polity()),new Region(3,6, dry, new Polity()),new Region(4,6, dry, new Polity()),new Region(5,6, dry, new Polity()),new Region(6,6, temperate, new Polity()),new Region(7,6, temperate, new Polity()),new Region(8,6, temperate, new Polity()),new Region(9,6, tropical, new Polity()),new Region(10,6, ocean, new Polity()),new Region(11,6, ocean, new Polity()),new Region(12,6, ocean, new Polity()),
    new Region(1,7, ocean, new Polity()),new Region(2,7, dry, new Polity()),new Region(3,7, dry, new Polity()),new Region(4,7, dry, new Polity()),new Region(5,7, temperate, new Polity()),new Region(6,7, temperate, new Polity()),new Region(7,7, temperate, new Polity(),"Lake Texcoco"),new Region(8,7, temperate, new Polity()),new Region(9,7, tropical, new Polity()),new Region(10,7, tropical, new Polity()),new Region(11,7, ocean, new Polity()),new Region(12,7, ocean, new Polity()),
    new Region(1,8, ocean, new Polity()),new Region(2,8, dry, new Polity()),new Region(3,8, dry, new Polity()),new Region(4,8, dry, new Polity()),new Region(5,8, temperate, new Polity()),new Region(6,8, temperate, new Polity()),new Region(7,8, temperate, new Polity()),new Region(8,8, temperate, new Polity()),new Region(9,8, temperate, new Polity()),new Region(10,8, tropical, new Polity()),new Region(11,8, tropical, new Polity()),new Region(12,8, tropical, new Polity()),
    new Region(1,9, ocean, new Polity()),new Region(2,9, ocean, new Polity()),new Region(3,9, dry, new Polity()),new Region(4,9, dry, new Polity()),new Region(5,9, temperate, new Polity()),new Region(6,9, temperate, new Polity()),new Region(7,9, temperate, new Polity()),new Region(8,9, temperate, new Polity()),new Region(9,9, temperate, new Polity()),new Region(10,9, temperate, new Polity()),new Region(11,9, tropical, new Polity()),new Region(12,9, tropical, new Polity()),
    new Region(1,10, ocean, new Polity()),new Region(2,10, ocean, new Polity()),new Region(3,10, ocean, new Polity()),new Region(4,10, ocean, new Polity()),new Region(5,10, tropical, new Polity()),new Region(6,10, tropical, new Polity()),new Region(7,10, temperate, new Polity()),new Region(8,10, temperate, new Polity()),new Region(9,10, temperate, new Polity()),new Region(10,10, temperate, new Polity()),new Region(11,10, tropical, new Polity()),new Region(12,10, tropical, new Polity()),
    new Region(1,11, ocean, new Polity()),new Region(2,11, ocean, new Polity()),new Region(3,11, ocean, new Polity(),"Pacific Ocean"),new Region(4,11, ocean, new Polity()),new Region(5,11, ocean, new Polity()),new Region(6,11, ocean, new Polity()),new Region(7,11, tropical, new Polity()),new Region(8,11, tropical, new Polity()),new Region(9,11, tropical, new Polity()),new Region(10,11, tropical, new Polity()),new Region(11,11, tropical, new Polity()),new Region(12,11, ocean, new Polity()),
    new Region(1,12, ocean, new Polity()),new Region(2,12, ocean, new Polity()),new Region(3,12, ocean, new Polity()),new Region(4,12, ocean, new Polity()),new Region(5,12, ocean, new Polity()),new Region(6,12, ocean, new Polity()),new Region(7,12, ocean, new Polity()),new Region(8,12, ocean, new Polity()),new Region(9,12, ocean, new Polity()),new Region(10,12, ocean, new Polity()),new Region(11,12, ocean, new Polity()),new Region(12,12, ocean, new Polity()),
  ];
}
export const mesoAmericaRivers = [lakeTexcoco1, lakeTexcoco2];
