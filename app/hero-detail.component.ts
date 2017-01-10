import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
      <article *ngIf="hero">
        <h2>{{hero.name}} Details</h2>
        <div><label>id:</label> <span>{{hero.id}}</span></div>
        <div>
          <label>name:</label>
          <input [(ngModel)]="hero.name" placeholder="name">
        </div>
      </article>
    `
})


export class HeroDetailComponent {
    @Input ()
    hero: Hero;
}