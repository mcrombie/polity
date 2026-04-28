export class Intersection {
  constructor(
    public _northWestTile: number[],
    public _northEastTile?: number[],
    public _southWestTile?: number[],
    public _southEastTile?: number[]
  ) {}

  borderingTiles(): number[][] {
    const arr: number[][] = [];
    if (this._northWestTile !== undefined) arr.push(this._northWestTile);
    if (this._northEastTile !== undefined) arr.push(this._northEastTile);
    if (this._southWestTile !== undefined) arr.push(this._southWestTile);
    if (this._southEastTile !== undefined) arr.push(this._southEastTile);
    return arr;
  }
}
