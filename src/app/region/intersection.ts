export class Intersection{
    constructor(public _northWestTile:number[], 
        public _northEastTile?:number[], 
        public _southWestTile?:number[], 
        public _southEastTile?:number[]){
            this._northWestTile = _northWestTile;
            this._northEastTile = _northEastTile;
            this._southWestTile = _southWestTile;
            this._southEastTile = _southEastTile;
    }
    borderingTiles(){
        let arr:number[][] = [];
        if(this._northWestTile !== undefined){arr.push(this._northWestTile)};
        if(this._northEastTile !== undefined){arr.push(this._northEastTile)};
        if(this._southWestTile !== undefined){arr.push(this._southWestTile)};
        if(this._southEastTile !== undefined){arr.push(this._southEastTile)};
        return arr;
    }
    // getNumberOfBorderingTiles(){
    //     let count = 0;
    //     if(this._northWestTile !== undefined){count++;};
    //     if(this._northEastTile !== undefined){count++;};
    //     if(this._southWestTile !== undefined){count++;};
    //     if(this._southEastTile !== undefined){count++;};
    //     return count;
    // }
}

