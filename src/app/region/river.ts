import { Intersection } from './intersection';

export class River{

    constructor(public _intersections:Intersection[]){}
    //HOW MANY CONNECTION POINTS EACH TILE HAS TO THIS RIVER
    tileYields(){
        let tileYields = {};
        this._intersections.forEach((intersection) => {
            let tiles = intersection.borderingTiles();
            for(let i = 0; i < tiles.length; i++){
                if(tileYields[tiles[i]] === undefined){
                    tileYields[tiles[i]] = 1;
                }
                else{
                    tileYields[tiles[i]]++;
                }
            }
        })
        return tileYields;
    }

    // WHERE SHOULD I DRAW THE RIVER LINES?
    // IN ORDER FROM NORTH TO SOUTH
    // EASILY BREAKABLE HERE!!!
    riverDrawing(){
        // let riverLines = [];
        let riverLines = {};
        let prevPoint:string;
        this._intersections.forEach((intersection) => {
            if(prevPoint === undefined){prevPoint = intersection._northWestTile}
            else{
                // 1. RIVER GOES WEST
                if(intersection._northWestTile[0].charCodeAt(0) == prevPoint.charCodeAt(0) - 1){
                    if(riverLines[intersection._northWestTile] === undefined){
                        riverLines[intersection._northWestTile] = ['south-river'];
                    }
                    else{
                        riverLines[intersection._northWestTile].push('south-river');
                    }

                    if(riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]) + 1)] === undefined){
                        riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]) + 1)] = ['north-river'];
                    }
                    else{
                        riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]) + 1)].push('north-river')
                    }
                    
                    
                }
                // 2. RIVER GOES SOUTH
                else if(intersection._northWestTile[0].charCodeAt(0) == prevPoint.charCodeAt(0)){
                    if(riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]))] === undefined){
                        riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]))] = ['east-river'];
                    }
                    else{
                        riverLines[intersection._northWestTile[0] + (parseInt(intersection._northWestTile[1]))].push('east-river');                    
                    }
                    if(riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0) + 1) + (parseInt(intersection._northWestTile[1]))] === undefined){
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0) + 1) + (parseInt(intersection._northWestTile[1]))] = ['west-river'];
                    }
                    else{
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0) + 1) + (parseInt(intersection._northWestTile[1]))].push('west-river');
                    }

                }
                // 3. RIVER GOES EAST
                else if(intersection._northWestTile[0].charCodeAt(0) == prevPoint.charCodeAt(0) + 1){
                    if(riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]))] === undefined){
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]))] = ['south-river'];
                    }
                    else{
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]))].push('south-river');
                    }
                    if(riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]) + 1)] === undefined){
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]) + 1)] = ['north-river'];
                    }
                    else{
                        riverLines[String.fromCharCode(intersection._northWestTile[0].charCodeAt(0)) + (parseInt(intersection._northWestTile[1]) + 1)].push('north-river');
                    }
                }
                // String.fromCharCode(region._id[0].charCodeAt(0) - 1)
                prevPoint = intersection._northWestTile;
            }
        })
        console.log(riverLines);
        return riverLines;
    }
}


const euphratesRiverIntersections:Intersection[] = [
    new Intersection("D1","E1", "D2", "E2"),
    new Intersection("D2","E2", "D3", "E3"),
    new Intersection("D3","E3", "D4", "E4"),
    new Intersection("E3","F3", "E4", "F4"),
    new Intersection("E4","F4", "E5", "F5"),
    new Intersection("F4","G4", "F5", "G5"),
    new Intersection("F5","G5", "F6", "H6"),
    new Intersection("G5","H5", "G6", "H6"),
    new Intersection("G6","H6", "G7", "H7"),
    new Intersection("H6","I6", "H7", "I7"),
    new Intersection("H7","I7", "H8", "I8"),
    new Intersection("H8","I8", "H9", "I9"),
    new Intersection("I8","J8", "I9", "J9"),
    new Intersection("I9","J9", "I10", "J10"),
    new Intersection("J9","K9", "J10", "K10")

]

const tigrisRiverIntersections:Intersection[] = [
    new Intersection("E1","F1", "E2", "F2"),
    new Intersection("F1","G1", "F2", "G2"),
    new Intersection("F2","G2", "F3", "G3"),
    new Intersection("G2","H2", "G3", "H3"),
    new Intersection("G3","H3", "G4", "H4"),
    new Intersection("H3","I3", "H4", "I4"),
    new Intersection("H4","I4", "H5", "I5"),
    new Intersection("I4","J4", "I5", "J5"),
    new Intersection("I5","J5", "I6", "J6"),
    new Intersection("I6","J6", "I7", "J7"),
    new Intersection("I7","J7", "I8", "J8"),
    new Intersection("J7","K7", "J8", "K8"),
    new Intersection("J8","K8", "J9", "K9"),
    new Intersection("K8","L8", "K9", "L9"),
    new Intersection("K9","L9", "K10", "L10"),
]

const jordanRiverIntersections:Intersection[] = [
    new Intersection("B6","C6", "B7", "C7"),
    new Intersection("B7","C7", "B8", "C8"),
    new Intersection("B8","C8", "B9", "C9")
]

export const euphrates = new River(euphratesRiverIntersections);
export const tigris = new River(tigrisRiverIntersections);
export const jordan = new River(jordanRiverIntersections);
