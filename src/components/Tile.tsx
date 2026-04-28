import { Region } from '../lib/region';

interface TileProps {
  region: Region;
}

export default function Tile({ region }: TileProps) {
  const borders = region._borders;
  const polity = region._polity;

  return (
    <div className={`tile ${region._climateType} ${polity.polityType.toLowerCase()} ${polity._selected}`}>
      <div className={borders[0]}></div>
      <div className={borders[1]}></div>
      <div className={borders[2]}></div>
      <div className={borders[3]}></div>
      {region._label && <div className="region-label">{region._label}</div>}
      <div className="icon-container">
        {polity._icons.map((_, i) => (
          <i key={i} className={`icon fa ${polity._visual._icon}`} aria-hidden="true"></i>
        ))}
      </div>
    </div>
  );
}
