import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h2>{{hero.name}} Details</h2>
  <div><label>id:</label> <span>{{hero.id}}</span></div>
  <div><label>name:</label> <span>{{hero.name}}</span></div>
  `,
})
export class AppComponent  {
  hero: Hero = {
    id: 1,
    name: "Dr. Hero"
  };
}
