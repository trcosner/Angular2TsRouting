import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a
      routerLink=""
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: true}"
      >Home
    </a>
    <a
      routerLink="about"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: true}"
      >About
    </a>
    <a
      routerLink="projects/1"
      routerLinkActive="active"
      >Project1
    </a>
  </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
