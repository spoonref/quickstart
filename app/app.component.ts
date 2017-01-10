import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id:3, name: "Wonderboy", icon:"face" },
  { id:2, name: "Young Nasty Man", icon:"flight" }
];

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
  `
})

export class AppComponent  {
  title = "Tour of Heroes";
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
