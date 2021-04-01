import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    selectedHero?: Hero;
    heroes: Hero[] = [];


    // constructor() { }
    constructor(private heroService: HeroService,
        private messageService: MessagesService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}