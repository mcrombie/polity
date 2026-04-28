import { Intersection } from './intersection';

export class River {
  constructor(public _intersections: Intersection[]) {}

  tileYields(): Record<string, number> {
    const tileYields: Record<string, number> = {};
    this._intersections.forEach(intersection => {
      const tiles = intersection.borderingTiles();
      for (const tile of tiles) {
        const key = `${tile[0]}-${tile[1]}`;
        tileYields[key] = (tileYields[key] ?? 0) + 1;
      }
    });
    return tileYields;
  }

  riverDrawing(): Record<string, string[]> {
    const riverLines: Record<string, string[]> = {};
    let prevPoint: number[] | undefined;

    const addLine = (key: string, line: string) => {
      if (riverLines[key] === undefined) riverLines[key] = [line];
      else riverLines[key].push(line);
    };

    this._intersections.forEach(intersection => {
      if (prevPoint === undefined) {
        prevPoint = intersection._northWestTile;
      } else {
        const nw = intersection._northWestTile;
        if (nw[0] === prevPoint[0] - 1) {
          addLine(`${nw[0]}-${nw[1]}`, 'south-river');
          addLine(`${nw[0]}-${nw[1] + 1}`, 'north-river');
        } else if (nw[1] === prevPoint[1] + 1) {
          addLine(`${nw[0]}-${nw[1]}`, 'east-river');
          addLine(`${nw[0] + 1}-${nw[1]}`, 'west-river');
        } else if (nw[1] === prevPoint[1] - 1) {
          addLine(`${nw[0]}-${nw[1] + 1}`, 'east-river');
          addLine(`${nw[0] + 1}-${nw[1] + 1}`, 'west-river');
        } else if (nw[0] === prevPoint[0] + 1) {
          addLine(`${nw[0]}-${nw[1]}`, 'south-river');
          addLine(`${nw[0]}-${nw[1] + 1}`, 'north-river');
        }
        prevPoint = nw;
      }
    });

    return riverLines;
  }
}

const euphratesIntersections = [
  new Intersection([4,1],[5,1],[4,2],[5,2]),
  new Intersection([4,2],[5,2],[4,3],[5,3]),
  new Intersection([4,3],[5,3],[4,4],[5,4]),
  new Intersection([5,3],[6,3],[5,4],[6,4]),
  new Intersection([5,4],[6,4],[5,5],[6,5]),
  new Intersection([6,4],[7,4],[6,5],[7,5]),
  new Intersection([6,5],[7,5],[6,6],[7,6]),
  new Intersection([7,5],[8,5],[7,6],[8,6]),
  new Intersection([7,6],[8,6],[7,7],[8,7]),
  new Intersection([8,6],[9,6],[8,7],[9,7]),
  new Intersection([8,7],[9,7],[8,8],[9,8]),
  new Intersection([8,8],[9,8],[8,9],[9,9]),
  new Intersection([9,8],[10,8],[9,9],[10,9]),
  new Intersection([9,9],[10,9],[9,10],[10,10]),
  new Intersection([10,9],[11,9],[10,10],[11,10]),
];

const tigrisIntersections = [
  new Intersection([5,1],[6,1],[5,2],[6,2]),
  new Intersection([6,1],[7,1],[6,2],[7,2]),
  new Intersection([6,2],[7,2],[6,3],[7,3]),
  new Intersection([7,2],[8,2],[7,3],[8,3]),
  new Intersection([7,3],[8,3],[7,4],[8,4]),
  new Intersection([8,3],[9,3],[8,4],[9,4]),
  new Intersection([8,4],[9,4],[8,5],[9,5]),
  new Intersection([9,4],[10,4],[9,5],[10,5]),
  new Intersection([9,5],[10,5],[9,6],[10,6]),
  new Intersection([9,6],[10,6],[9,7],[10,7]),
  new Intersection([9,7],[10,7],[9,8],[10,8]),
  new Intersection([10,7],[11,7],[10,8],[11,8]),
  new Intersection([10,8],[11,8],[10,9],[11,9]),
  new Intersection([11,8],[12,8],[11,9],[12,9]),
  new Intersection([11,9],[12,9],[11,10],[12,10]),
];

const jordanIntersections = [
  new Intersection([2,6],[3,6],[2,7],[3,7]),
  new Intersection([2,7],[3,7],[2,8],[3,8]),
  new Intersection([2,8],[3,8],[2,9],[3,9]),
];

const yellowRiverIntersections = [
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
  new Intersection([9,3],[10,3],[9,4],[10,4]),
];

const yangtzeIntersections = [
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
  new Intersection([11,6],[12,6],[11,7],[12,7]),
];

const lakeTexcoco1Intersections = [
  new Intersection([6,5],[6,6],[7,5],[7,6]),
  new Intersection([7,5],[7,6],[8,5],[8,6]),
  new Intersection([7,6],[7,7],[8,6],[8,7]),
  new Intersection([7,7],[7,8],[8,7],[8,8]),
];

const lakeTexcoco2Intersections = [
  new Intersection([6,5],[6,6],[7,5],[7,6]),
  new Intersection([6,6],[6,7],[7,6],[7,7]),
  new Intersection([6,7],[6,8],[7,7],[7,8]),
  new Intersection([7,7],[7,8],[8,7],[8,8]),
];

export const euphrates = new River(euphratesIntersections);
export const tigris = new River(tigrisIntersections);
export const jordan = new River(jordanIntersections);
export const yellowRiver = new River(yellowRiverIntersections);
export const yangtzeRiver = new River(yangtzeIntersections);
export const lakeTexcoco1 = new River(lakeTexcoco1Intersections);
export const lakeTexcoco2 = new River(lakeTexcoco2Intersections);
