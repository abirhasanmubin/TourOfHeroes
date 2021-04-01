import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }
  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
