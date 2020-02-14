export class Visual {
    constructor(public _icon:string){
        this._icon = _icon;
    }
}

export const forestVisual:Visual = new Visual("fa-tree forest");
export const bandVisual:Visual = new Visual("fa-male band");
export const villageVisual:Visual = new Visual("fa-home village");
export const townVisual:Visual = new Visual("fa-building town");