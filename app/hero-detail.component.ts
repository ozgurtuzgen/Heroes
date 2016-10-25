import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

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
    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location:Location
        ) { }

    ngOnInit() {
        this.route.params.forEach((params:Params)=>{
            let id = +['id']
        }) 

    }

    @Input()    
    hero: Hero;

    getHero(id:number){
                
    }
}