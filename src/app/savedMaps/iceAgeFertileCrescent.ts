import { euphrates, tigris, jordan } from '../region/river';

import { Region } from '../region/region';

import { dry, ocean, temperate, continental, polar } from '../region/climate';

import { Polity } from '../polity/polity';
import { SavedMap } from './SavedMap';


const iceAgeFertileCrescentRegions = [
    new Region(1,1, polar, new Polity()),
    new Region(2,1, polar, new Polity()),
    new Region(3,1, polar, new Polity()),
    new Region(4,1, polar, new Polity()),
    new Region(5,1, polar, new Polity()),
    new Region(6,1, polar, new Polity()),
    new Region(7,1, polar, new Polity()),
    new Region(8,1, polar, new Polity()),
    new Region(9,1, polar, new Polity()),
    new Region(10,1, polar, new Polity()),
    new Region(11,1, polar, new Polity()),
    new Region(12,1, polar, new Polity()),
    new Region(1,2, ocean, new Polity()),
    new Region(2,2, continental, new Polity()),
    new Region(3,2, continental, new Polity()),
    new Region(4,2, continental, new Polity()),
    new Region(5,2, continental, new Polity()),
    new Region(6,2, continental, new Polity()),
    new Region(7,2, continental, new Polity()),
    new Region(8,2, continental, new Polity()),
    new Region(9,2, continental, new Polity()),
    new Region(10,2, continental, new Polity()),
    new Region(11,2, continental, new Polity()),
    new Region(12,2, continental, new Polity()),
    new Region(1,3, ocean, new Polity()),
    new Region(2,3, continental, new Polity()),
    new Region(3,3, continental, new Polity()),
    new Region(4,3, continental, new Polity()),
    new Region(5,3, continental, new Polity()),
    new Region(6,3, continental, new Polity()),
    new Region(7,3, continental, new Polity()),
    new Region(8,3, continental, new Polity()),
    new Region(9,3, continental, new Polity()),
    new Region(10,3, continental, new Polity()),
    new Region(11,3, continental, new Polity()),
    new Region(12,3, continental, new Polity()),
    new Region(1,4, ocean, new Polity()),
    new Region(2,4, continental, new Polity()),
    new Region(3,4, continental, new Polity()),
    new Region(4,4, continental, new Polity()),
    new Region(5,4, continental, new Polity()),
    new Region(6,4, continental, new Polity()),
    new Region(7,4, continental, new Polity()),
    new Region(8,4, continental, new Polity()),
    new Region(9,4, continental, new Polity(), "Tigris River"),
    new Region(10,4, continental, new Polity()),
    new Region(11,4, continental, new Polity()),
    new Region(12,4, continental, new Polity()),
    new Region(1,5, ocean, new Polity()),
    new Region(2,5, continental, new Polity()),
    new Region(3,5, continental, new Polity()),
    new Region(4,5, continental, new Polity()),
    new Region(5,5, continental, new Polity()),
    new Region(6,5, continental, new Polity()),
    new Region(7,5, continental, new Polity()),
    new Region(8,5, continental, new Polity(), "Mesopotamia"),
    new Region(9,5, continental, new Polity()),
    new Region(10,5, continental, new Polity()),
    new Region(11,5, continental, new Polity()),
    new Region(12,5, continental, new Polity()),
    new Region(1,6, ocean, new Polity(), "Mediterranean Sea"),
    new Region(2,6, continental, new Polity()),
    new Region(3,6, continental, new Polity()),
    new Region(4,6, continental, new Polity()),
    new Region(5,6, continental, new Polity()),
    new Region(6,6, continental, new Polity()),
    new Region(7,6, continental, new Polity(), "Euphrates River"),
    new Region(8,6, continental, new Polity()),
    new Region(9,6, continental, new Polity()),
    new Region(10,6, continental, new Polity()),
    new Region(11,6, continental, new Polity()),
    new Region(12,6, continental, new Polity()),
    new Region(1,7, ocean, new Polity()),
    new Region(2,7, continental, new Polity()),
    new Region(3,7, continental, new Polity()),
    new Region(4,7, continental, new Polity()),
    new Region(5,7, continental, new Polity()),
    new Region(6,7, continental, new Polity()),
    new Region(7,7, continental, new Polity()),
    new Region(8,7, continental, new Polity()),
    new Region(9,7, continental, new Polity()),
    new Region(10,7, continental, new Polity()),
    new Region(11,7, continental, new Polity()),
    new Region(12,7, continental, new Polity()),
    new Region(1,8, ocean, new Polity()),
    new Region(2,8, continental, new Polity()),
    new Region(3,8, continental, new Polity(), "Jordan River"),
    new Region(4,8, dry, new Polity()),
    new Region(5,8, dry, new Polity()),
    new Region(6,8, dry, new Polity()),
    new Region(7,8, dry, new Polity()),
    new Region(8,8, continental, new Polity()),
    new Region(9,8, continental, new Polity()),
    new Region(10,8, continental, new Polity()),
    new Region(11,8, continental, new Polity()),
    new Region(12,8, continental, new Polity()),
    new Region(1,9, ocean, new Polity()),
    new Region(2,9, continental, new Polity()),
    new Region(3,9, ocean, new Polity(), "Dead Sea"),
    new Region(4,9, dry, new Polity()),
    new Region(5,9, dry, new Polity()),
    new Region(6,9, dry, new Polity()),
    new Region(7,9, dry, new Polity()),
    new Region(8,9, continental, new Polity()),
    new Region(9,9, continental, new Polity()),
    new Region(10,9, continental, new Polity()),
    new Region(11,9, continental, new Polity()),
    new Region(12,9, continental, new Polity()),
    new Region(1,10, continental, new Polity()),
    new Region(2,10, continental, new Polity()),
    new Region(3,10, dry, new Polity()),
    new Region(4,10, dry, new Polity()),
    new Region(5,10, dry, new Polity()),
    new Region(6,10, dry, new Polity()),
    new Region(7,10, dry, new Polity()),
    new Region(8,10, dry, new Polity()),
    new Region(9,10, continental, new Polity()),
    new Region(10,10, continental, new Polity()),
    new Region(11,10, ocean, new Polity()),
    new Region(12,10, ocean, new Polity(), "Persian Gulf"),
    new Region(1,11, dry, new Polity()),
    new Region(2,11, dry, new Polity()),
    new Region(3,11, dry, new Polity()),
    new Region(4,11, dry, new Polity()),
    new Region(5,11, dry, new Polity()),
    new Region(6,11, dry, new Polity(), "Arabian Desert"),
    new Region(7,11, dry, new Polity()),
    new Region(8,11, dry, new Polity()),
    new Region(9,11, dry, new Polity()),
    new Region(10,11, dry, new Polity()),
    new Region(11,11, dry, new Polity()),
    new Region(12,11, ocean, new Polity()),
    new Region(1,12, dry, new Polity()),
    new Region(2,12, ocean, new Polity()),
    new Region(3,12, dry, new Polity()),
    new Region(4,12, dry, new Polity()),
    new Region(5,12, dry, new Polity()),
    new Region(6,12, dry, new Polity()),
    new Region(7,12, dry, new Polity()),
    new Region(8,12, dry, new Polity()),
    new Region(9,12, dry, new Polity()),
    new Region(10,12, dry, new Polity()),
    new Region(11,12, dry, new Polity()),
    new Region(12,12, dry, new Polity()),
];

const fertileCrescentRivers = [
    euphrates,
    tigris,
    jordan
]

export const iceAgeFertileCrescent = new SavedMap(iceAgeFertileCrescentRegions,fertileCrescentRivers);