import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: '#heroes-app',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge"><i class="material-icons">{{hero.icon}}</i></span><span class="text">{{hero.name}}</span>
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
