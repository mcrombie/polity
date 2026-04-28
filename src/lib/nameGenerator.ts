import { chicagoDogNamesList, fertileCrescentNamesList, chinaNamesList } from './nameLists';

class NameGenerator {
  public _originalNames: string[];
  public _version: number;

  constructor(public _names: string[]) {
    this._names = [..._names];
    this._originalNames = [..._names];
    this._version = 1;
  }

  popRandomName(): string {
    if (this._names.length === 0) this.repopulateList();
    const rn = Math.floor(Math.random() * this._names.length);
    return this._names.splice(rn, 1)[0];
  }

  private repopulateList() {
    this._version++;
    for (const name of this._originalNames) {
      this._names.push(name + "-" + this._version);
    }
  }
}

export const chicagoDogNames = new NameGenerator(chicagoDogNamesList);
export const fertileCrescentNames = new NameGenerator(fertileCrescentNamesList);
export const chinaNames = new NameGenerator(chinaNamesList);
