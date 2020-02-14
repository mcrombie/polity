import { euphrates, tigris, jordan } from '../region/river';

import { Region } from '../region/region';

import { dry, ocean, temperate, continental } from '../region/climate';

import { Polity } from '../polity/polity';
import { SavedMap } from './SavedMap';


const regions = [
    new Region(1, 1, continental, new Polity()),
    new Region(2, 1, continental, new Polity()),
    new Region(3, 1, ocean, new Polity())
  
];

const rivers = [

]

export const testMap = new SavedMap(regions,rivers);