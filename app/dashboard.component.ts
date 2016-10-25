import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private heroService:HeroService ) { }

    heroes: Hero[]= [];

    ngOnInit() { 
        this.heroService.getTopHeroes().then(result=> this.heroes = result);
    }

    gotoDetail(hero:Hero): void {

    }
}