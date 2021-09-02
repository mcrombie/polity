import { Region } from '../region/region';

import {  ocean, tropical, dry, temperate, continental, polar } from '../region/climate';

import { Polity } from '../polity/polity';
import { SavedMap } from './SavedMap';

const allClimatesRegions = [
    new Region(1,1, ocean, new Polity()),
    new Region(2,1, ocean, new Polity()),
    new Region(3,1, ocean, new Polity()),
    new Region(4,1, ocean, new Polity()),
    new Region(5,1, ocean, new Polity()),
    new Region(6,1, ocean, new Polity()),
    new Region(7,1, ocean, new Polity()),
    new Region(8,1, ocean, new Polity()),
    new Region(9,1, ocean, new Polity()),
    new Region(10,1, ocean, new Polity()),
    new Region(11,1, ocean, new Polity()),
    new Region(12,1, ocean, new Polity()),
    new Region(1,2, ocean, new Polity()),
    new Region(2,2, ocean, new Polity()),
    new Region(3,2, ocean, new Polity()),
    new Region(4,2, ocean, new Polity()),
    new Region(5,2, ocean, new Polity()),
    new Region(6,2, ocean, new Polity()),
    new Region(7,2, ocean, new Polity()),
    new Region(8,2, ocean, new Polity()),
    new Region(9,2, ocean, new Polity()),
    new Region(10,2, ocean, new Polity()),
    new Region(11,2, ocean, new Polity()),
    new Region(12,2, ocean, new Polity()),
    new Region(1,3, ocean, new Polity()),
    new Region(2,3, ocean, new Polity()),
    new Region(3,3, ocean, new Polity()),
    new Region(4,3, ocean, new Polity()),
    new Region(5,3, ocean, new Polity()),
    new Region(6,3, ocean, new Polity()),
    new Region(7,3, ocean, new Polity()),
    new Region(8,3, ocean, new Polity()),
    new Region(9,3, ocean, new Polity()),
    new Region(10,3, ocean, new Polity()),
    new Region(11,3, ocean, new Polity()),
    new Region(12,3, ocean, new Polity()),
    new Region(1,4, ocean, new Polity()),
    new Region(2,4, ocean, new Polity()),
    new Region(3,4, ocean, new Polity()),
    new Region(4,4, polar, new Polity()),
    new Region(5,4, polar, new Polity()),
    new Region(6,4, polar, new Polity()),
    new Region(7,4, polar, new Polity()),
    new Region(8,4, polar, new Polity()),
    new Region(9,4, ocean, new Polity()),
    new Region(10,4, ocean, new Polity()),
    new Region(11,4, ocean, new Polity()),
    new Region(12,4, ocean, new Polity()),
    new Region(1,5, ocean, new Polity()),
    new Region(2,5, ocean, new Polity()),
    new Region(3,5, ocean, new Polity()),
    new Region(4,5, continental, new Polity()),
    new Region(5,5, continental, new Polity()),
    new Region(6,5, continental, new Polity()),
    new Region(7,5, continental, new Polity()),
    new Region(8,5, continental, new Polity()),
    new Region(9,5, ocean, new Polity()),
    new Region(10,5, ocean, new Polity()),
    new Region(11,5, ocean, new Polity()),
    new Region(12,5, ocean, new Polity()),
    new Region(1,6, ocean, new Polity()),
    new Region(2,6, ocean, new Polity()),
    new Region(3,6, ocean, new Polity()),
    new Region(4,6, temperate, new Polity()),
    new Region(5,6, temperate, new Polity()),
    new Region(6,6, temperate, new Polity()),
    new Region(7,6, temperate, new Polity()),
    new Region(8,6, temperate, new Polity()),
    new Region(9,6, ocean, new Polity()),
    new Region(10,6, ocean, new Polity()),
    new Region(11,6, ocean, new Polity()),
    new Region(12,6, ocean, new Polity()),
    new Region(1,7, ocean, new Polity()),
    new Region(2,7, ocean, new Polity()),
    new Region(3,7, ocean, new Polity()),
    new Region(4,7, dry, new Polity()),
    new Region(5,7, dry, new Polity()),
    new Region(6,7, dry, new Polity()),
    new Region(7,7, dry, new Polity()),
    new Region(8,7, dry, new Polity()),
    new Region(9,7, ocean, new Polity()),
    new Region(10,7, ocean, new Polity()),
    new Region(11,7, ocean, new Polity()),
    new Region(12,7, ocean, new Polity()),
    new Region(1,8, ocean, new Polity()),
    new Region(2,8, ocean, new Polity()),
    new Region(3,8, ocean, new Polity()),
    new Region(4,8, tropical, new Polity()),
    new Region(5,8, tropical, new Polity()),
    new Region(6,8, tropical, new Polity()),
    new Region(7,8, tropical, new Polity()),
    new Region(8,8, tropical, new Polity()),
    new Region(9,8, ocean, new Polity()),
    new Region(10,8, ocean, new Polity()),
    new Region(11,8, ocean, new Polity()),
    new Region(12,8, ocean, new Polity()),
    new Region(1,9, ocean, new Polity()),
    new Region(2,9, ocean, new Polity()),
    new Region(3,9, ocean, new Polity()),
    new Region(4,9, ocean, new Polity()),
    new Region(5,9, ocean, new Polity()),
    new Region(6,9, ocean, new Polity()),
    new Region(7,9, ocean, new Polity()),
    new Region(8,9, ocean, new Polity()),
    new Region(9,9, ocean, new Polity()),
    new Region(10,9, ocean, new Polity()),
    new Region(11,9, ocean, new Polity()),
    new Region(12,9, ocean, new Polity()),
    new Region(1,10, ocean, new Polity()),
    new Region(2,10, ocean, new Polity()),
    new Region(3,10, ocean, new Polity()),
    new Region(4,10, ocean, new Polity()),
    new Region(5,10, ocean, new Polity()),
    new Region(6,10, ocean, new Polity()),
    new Region(7,10, ocean, new Polity()),
    new Region(8,10, ocean, new Polity()),
    new Region(9,10, ocean, new Polity()),
    new Region(10,10, ocean, new Polity()),
    new Region(11,10, ocean, new Polity()),
    new Region(12,10, ocean, new Polity()),
    new Region(1,11, ocean, new Polity()),
    new Region(2,11, ocean, new Polity()),
    new Region(3,11, ocean, new Polity()),
    new Region(4,11, ocean, new Polity()),
    new Region(5,11, ocean, new Polity()),
    new Region(6,11, ocean, new Polity()),
    new Region(7,11, ocean, new Polity()),
    new Region(8,11, ocean, new Polity()),
    new Region(9,11, ocean, new Polity()),
    new Region(10,11, ocean, new Polity()),
    new Region(11,11, ocean, new Polity()),
    new Region(12,11, ocean, new Polity()),
    new Region(1,12, ocean, new Polity()),
    new Region(2,12, ocean, new Polity()),
    new Region(3,12, ocean, new Polity()),
    new Region(4,12, ocean, new Polity()),
    new Region(5,12, ocean, new Polity()),
    new Region(6,12, ocean, new Polity()),
    new Region(7,12, ocean, new Polity()),
    new Region(8,12, ocean, new Polity()),
    new Region(9,12, ocean, new Polity()),
    new Region(10,12, ocean, new Polity()),
    new Region(11,12, ocean, new Polity()),
    new Region(12,12, ocean, new Polity()),
];

const rivers = [

]

export const allClimates = new SavedMap(allClimatesRegions,rivers);