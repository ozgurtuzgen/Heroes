import { Component, OnInit, Input } from '@angular/core';
import {Hero} from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    template: `
    <div *ngIf=hero>
        <h2>{{hero.name}}</h2>
        <div><label>id:</label>{{hero.id}}</div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name">        
        </div>
    </div>  
    `
})
export class HeroDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input()    
    hero: Hero;
}