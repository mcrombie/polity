import {chicagoDogNamesList, fertileCrescentNamesList} from './nameLists';

class NameGenerator{
    public _originalNames:string[];
    public _version:number;
    constructor(public _names:string[]){
        this._names=_names;
        this._originalNames=this.duplicateList(_names);
        this._version = 1;
    }

    popRandomName(){
        let rn;
        if(this._names.length == 0){this.repopulateList();}
        if(this._names.length > 0){
            rn = Math.floor(Math.random() * this._names.length);
            return this._names.splice(rn,1)[0];
        }
        
        
        //this.popRandomName();
        
    }

    duplicateList(list){
        let duplicatedList:string[] = [];
        for(let i=0; i < list.length; i++){
            duplicatedList.push(list[i]);
        }
        return duplicatedList;
    }

    repopulateList(){
        //REBUILDS THE LIST WITH THE SAME ORGINAL NAMES WITH A 2 APPENDED AT THE END
        console.log(`REPOPULATING LIST`);
        this._version++;
        for(let i=0; i < this._originalNames.length; i++){
            this._names.push(this._originalNames[i] + "-" + this._version);
        }
    }
}

export const chicagoDogNames = new NameGenerator(chicagoDogNamesList);
export const fertileCrescentNames = new NameGenerator(fertileCrescentNamesList);
