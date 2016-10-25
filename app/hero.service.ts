import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes';

@Injectable()
export class HeroService {

    constructor() { }

    getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(resolve=> 
            setTimeout(resolve,2000)).then(()=>
            this.getHeroes());
    }

    getTopHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES.slice(1,5));
    }

    getHero(id:number):Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero=>hero.id === id));
    }
}