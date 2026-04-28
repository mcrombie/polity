import { useRef, useState, useEffect } from 'react';
import { Region } from '../lib/region';
import { Polity } from '../lib/polity';
import { NoPolity } from '../lib/noPolity';
import { Band } from '../lib/band';
import { River } from '../lib/river';
import Tile from './Tile';

interface MiniMapProps {
  title: string;
  createRegions: () => Region[];
  rivers: River[];
}

export default function MiniMap({ title, createRegions, rivers }: MiniMapProps) {
  const regionsRef = useRef<Region[]>([]);
  const politiesRef = useRef<Polity[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [year, setYear] = useState(0);
  const [, forceUpdate] = useState(0);

  function initGame(regions: Region[]) {
    // Add starting polity
    const startingBand = new Band(regions[65], 'Origin', 10, true);
    regions[65]._polity = startingBand;
    politiesRef.current = [startingBand];

    // Apply rivers
    rivers.forEach(river => {
      const riverLines = river.riverDrawing();
      const riverYields = river.tileYields();
      regions.forEach(region => {
        const key = `${region._col}-${region._row}`;
        if (riverLines[key] !== undefined) {
          for (let i = 0; i < riverLines[key].length; i++) {
            region._borders[i] = riverLines[key][i];
          }
        }
        if (riverYields[key] !== undefined) {
          region._riverConnections += riverYields[key];
        }
      });
    });
  }

  function reset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    const regions = createRegions();
    regionsRef.current = regions;
    initGame(regions);
    setYear(0);
    forceUpdate(n => n + 1);
  }

  useEffect(() => {
    reset();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function forwardYears(number: number) {
    const regions = regionsRef.current;
    const polities = politiesRef.current;

    for (let i = 0; i < number; i++) {
      // Polities act
      polities.forEach(polity => polity.act(regions));

      // Regions act: add new polities to main array and replenish food
      regions.forEach(region => {
        if (!region._polity._partOfMainArray && region._polity.polityType !== 'None') {
          polities.push(region._polity);
          region._polity._partOfMainArray = true;
        }
        region.replenishFood();
      });

      // Remove dead polities
      for (let j = polities.length - 1; j >= 0; j--) {
        const polity = polities[j];
        if (polity._population <= 1 && polity.polityType !== 'None') {
          polity._region._polity = new NoPolity();
          polities.splice(j, 1);
        }
      }
    }

    setYear(y => y + number);
    forceUpdate(n => n + 1);
  }

  function play(yearsPerSecond: number) {
    pause();
    intervalRef.current = setInterval(() => {
      forwardYears(yearsPerSecond);
    }, 1000);
  }

  function pause() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function globalPopulation() {
    return politiesRef.current.reduce((sum, p) => sum + p._population, 0);
  }

  function globalFoodYielded() {
    return regionsRef.current.reduce((sum, r) => sum + r._foodYield, 0);
  }

  return (
    <div className="map-container">
      <div className="title-data-container">
        <div className="map-title">{title}</div>
      </div>

      <div className="tile-container">
        {regionsRef.current.map((region, i) => (
          <Tile key={i} region={region} />
        ))}
      </div>

      <div className="control-panel">
        <div className="control-panel__button-container">
          <button className="control-panel__btn" onClick={reset}>Reset</button>

          <div className="control-panel__forward-button-container">
            <button
              className="control-panel__btn"
              onClick={() => {
                const input = document.getElementById(`yps-${title}`) as HTMLInputElement;
                play(parseInt(input?.value ?? '10'));
              }}
            >
              <i className="icon fa fa-play" aria-hidden="true"></i>
            </button>
            <input
              id={`yps-${title}`}
              className="control-panel__years-per-second-input"
              type="number"
              defaultValue={10}
              min={1}
              max={100}
            />
            <div className="control-panel__forward-label">years per second</div>
          </div>

          <div className="control-panel__forward-button-container">
            <button
              className="control-panel__btn"
              onClick={() => {
                const input = document.getElementById(`ypstep-${title}`) as HTMLInputElement;
                forwardYears(parseInt(input?.value ?? '100'));
              }}
            >
              <i className="icon fa fa-plus" aria-hidden="true"></i>
            </button>
            <input
              id={`ypstep-${title}`}
              className="control-panel__years-per-second-input"
              type="number"
              defaultValue={100}
              min={1}
              max={1000}
            />
            <div className="control-panel__forward-label">years forward</div>
          </div>

          <button className="control-panel__btn" onClick={pause}>
            <i className="icon fa fa-pause" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="data-container">
        <div className="data-container__data-point">Year: {year}</div>
        <div className="data-container__data-point">Population: {globalPopulation()}</div>
        <div className="data-container__data-point">Food Yield: {globalFoodYielded()}</div>
      </div>
    </div>
  );
}
