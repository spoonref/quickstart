import { Component, Input } from '@angular/core';
import { Hero } from './hero';

const ICONS = [
    "face", "access_alarm", "add_location", "adjust"
];

@Component({
    selector: 'hero-detail',
    template: `
      <article *ngIf="hero">
        <h2>{{hero.name}} Details</h2>
        <div>
            <label>icon:</label>
            <select [(ngModel)]="hero.icon" placeholder="Select an Icon">
                <option *ngFor="let icon of icons">{{icon}}</option>
            </select>
        </div>
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
    icons = ICONS;
}