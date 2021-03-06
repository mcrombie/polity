import {Component} from '@angular/core';
import { TestComponentService } from './test-comp.service';

@Component({
    selector: 'test-comp',
    template: `
        <h2>{{title}}</h2>
        <button (click)="poop()">CLick me</button>
        <ul>
            <li *ngFor="let pickle of pickles">
                {{pickle}}
            </li>
        </ul>
    `
})

export class TestComponent{
    title = "List of courses";
    pickles;

    constructor(service: TestComponentService){
        this.pickles = service.getPickles();
    }

    poop(){
        console.log('poop');
    }

    //LOGIC FOR CALLING AN HTTP SERVICE
}