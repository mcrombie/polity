import { Intersection } from './intersection';

export class River{

    constructor(public _intersections:Intersection[]){}
    //HOW MANY CONNECTION POINTS EACH TILE HAS TO THIS RIVER
    tileYields(){
        let tileYields = {};
        this._intersections.forEach((intersection) => {
            let tiles = intersection.borderingTiles();
            for(let i = 0; i < tiles.length; i++){
                if(tileYields[`${tiles[i][0]}-${tiles[i][1]}`] === undefined){
                    tileYields[`${tiles[i][0]}-${tiles[i][1]}`] = 1;
                }
                else{
                    tileYields[`${tiles[i][0]}-${tiles[i][1]}`]++;
                }
            }
        })
        return tileYields;
    }

    riverDrawing(){
        let riverLines = {};
        let prevPoint:number[];
        this._intersections.forEach((intersection) => {
            if(prevPoint === undefined){prevPoint = intersection._northWestTile}
            else{
                // 1. RIVER GOES WEST
                if(intersection._northWestTile[0] == prevPoint[0] - 1){
                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] = ['south-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`].push('south-river');
                    }

                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`]  = ['north-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`].push('north-river')
                    }
                    
                    
                }
                // 2. RIVER GOES SOUTH
                else if(intersection._northWestTile[1] == prevPoint[1] + 1){
                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] = ['east-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`].push('east-river');                    
                    }
                    if(riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1]}`] = ['west-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1]}`].push('west-river');
                    }

                }
                // 3. RIVER GOES NORTH
                else if(intersection._northWestTile[1] == prevPoint[1] - 1){
                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`] = ['east-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`].push('east-river');                    
                    }
                    if(riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1] + 1}`] = ['west-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0] + 1}-${intersection._northWestTile[1] + 1}`].push('west-river');
                    }

                }
                // 4. RIVER GOES EAST
                else if(intersection._northWestTile[0] == prevPoint[0] + 1){
                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`] = ['south-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1]}`].push('south-river');
                    }
                    if(riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`] === undefined){
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`] = ['north-river'];
                    }
                    else{
                        riverLines[`${intersection._northWestTile[0]}-${intersection._northWestTile[1] + 1}`].push('north-river');
                    }
                }
                // String.fromCharCode(region._id[0].charCodeAt(0) - 1)
                prevPoint = intersection._northWestTile;
            }
        })
        return riverLines;
    }
}


const euphratesRiverIntersections:Intersection[] = [
    new Intersection([4,1],[5,1], [4,2], [5,2]),
    new Intersection([4,2],[5,2], [4,3], [5,3]),
    new Intersection([4,3],[5,3], [4,4], [5,4]),
    new Intersection([5,3],[6,3], [5,4], [6,4]),
    new Intersection([5,4],[6,4], [5,5], [6,5]),
    new Intersection([6,4],[7,4], [6,5], [7,5]),
    new Intersection([6,5],[7,5], [6,6], [7,6]),
    new Intersection([7,5],[8,5], [7,6], [8,6]),
    new Intersection([7,6],[8,6], [7,7], [8,7]),
    new Intersection([8,6],[9,6], [8,7], [9,7]),
    new Intersection([8,7],[9,7], [8,8], [9,8]),
    new Intersection([8,8],[9,8], [8,9], [9,9]),
    new Intersection([9,8],[10,8], [9,9], [10,9]),
    new Intersection([9,9],[10,9], [9,10], [10,10]),
    new Intersection([10,9],[11,9], [10,10], [11,10])

]

const tigrisRiverIntersections:Intersection[] = [
    new Intersection([5,1],[6,1], [5,2], [6,2]),
    new Intersection([6,1],[7,1], [6,2], [7,2]),
    new Intersection([6,2],[7,2], [6,3], [7,3]),
    new Intersection([7,2],[8,2], [7,3], [8,3]),
    new Intersection([7,3],[8,3], [7,4], [8,4]),
    new Intersection([8,3],[9,3], [8,4], [9,4]),
    new Intersection([8,4],[9,4], [8,5], [9,5]),
    new Intersection([9,4],[10,4], [9,5], [10,5]),
    new Intersection([9,5],[10,5], [9,6], [10,6]),
    new Intersection([9,6],[10,6], [9,7], [10,7]),
    new Intersection([9,7],[10,7], [9,8], [10,8]),
    new Intersection([10,7],[11,7], [10,8], [11,8]),
    new Intersection([10,8],[11,8], [10,9], [11,9]),
    new Intersection([11,8],[12,8], [11,9], [12,9]),
    new Intersection([11,9],[12,9], [11,10], [12,10]),
]

const jordanRiverIntersections:Intersection[] = [
    new Intersection([2,6],[3,6], [2,7], [3,7]),
    new Intersection([2,7],[3,7], [2,8], [3,8]),
    new Intersection([2,8],[3,8], [2,9], [3,9])
]

const yellowRiverIntersections:Intersection[] = [
    new Intersection([2,4],[3,4],[2,5],[3,5]),
    new Intersection([3,4],[4,4],[3,5],[4,5]),
    new Intersection([3,3],[4,3],[3,4],[4,4]),
    new Intersection([4,3],[5,3],[4,4],[5,4]),
    new Intersection([5,3],[6,3],[5,4],[6,4]),
    new Intersection([5,2],[6,2],[5,3],[6,3]),
    new Intersection([6,2],[7,2],[6,3],[7,3]),
    new Intersection([6,3],[7,3],[6,4],[7,4]),
    new Intersection([6,4],[7,4],[6,5],[7,5]),
    new Intersection([7,4],[8,4],[7,5],[8,5]),
    new Intersection([8,4],[9,4],[8,5],[9,5]),
    new Intersection([9,4],[10,4],[9,5],[10,5]),
    new Intersection([9,3],[10,3],[9,4],[10,4])

]
const yangtzeRiverIntersections:Intersection[] = [
    new Intersection([1,4],[2,4],[1,5],[2,5]),
    new Intersection([1,5],[2,5],[1,6],[2,6]),
    new Intersection([2,5],[3,5],[2,6],[3,6]),
    new Intersection([2,6],[3,6],[2,7],[3,7]),
    new Intersection([3,6],[4,6],[3,7],[4,7]),
    new Intersection([4,6],[5,6],[4,7],[5,7]),
    new Intersection([5,6],[6,6],[5,7],[6,7]),
    new Intersection([5,7],[6,7],[5,8],[6,8]),
    new Intersection([6,7],[7,7],[6,8],[7,8]),
    new Intersection([7,7],[8,7],[7,8],[8,8]),
    new Intersection([8,7],[9,7],[8,8],[9,8]),
    new Intersection([9,7],[10,7],[9,8],[10,8]),
    new Intersection([9,6],[10,6],[9,7],[10,7]),
    new Intersection([10,6],[11,6],[10,7],[11,7]),
    new Intersection([11,6],[12,6],[11,7],[12,7])


]

const lakeTexcocoIntersections1:Intersection[] = [
    new Intersection([6,5],[6,6],[7,5],[7,6]),
    new Intersection([7,5],[7,6],[8,5],[8,6]),
    new Intersection([7,6],[7,7],[8,6],[8,7]),
    new Intersection([7,7],[7,8],[8,7],[8,8])
]
const lakeTexcocoIntersections2:Intersection[] = [
    new Intersection([6,5],[6,6],[7,5],[7,6]),
    new Intersection([6,6],[6,7],[7,6],[7,7]),
    new Intersection([6,7],[6,8],[7,7],[7,8]),
    new Intersection([7,7],[7,8],[8,7],[8,8])

]

export const euphrates = new River(euphratesRiverIntersections);
export const tigris = new River(tigrisRiverIntersections);
export const jordan = new River(jordanRiverIntersections);
export const yellowRiver = new River(yellowRiverIntersections);
export const yangtzeRiver = new River(yangtzeRiverIntersections);
export const lakeTexcoco1 = new River(lakeTexcocoIntersections1);
export const lakeTexcoco2 = new River(lakeTexcocoIntersections2);
