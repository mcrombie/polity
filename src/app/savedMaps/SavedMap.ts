import { Region } from '../region/region';

import { River } from '../region/river';

export class SavedMap{
    constructor(public _regions:Region[], public _rivers:River[]){}
}

