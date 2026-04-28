import { Polity } from './polity';

export class NoPolity extends Polity {
  constructor() {
    super();
    this._name = '';
    this.polityType = 'None';
    this._hasMoved = false;
    this._settled = false;
    this._population = 0;
    this.growthRate = 0;
    this._foodYielded = 0;
    this._foodStored = 0;
    this._farmingLevel = 0;
  }
}
