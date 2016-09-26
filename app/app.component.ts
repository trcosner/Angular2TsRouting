import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a *ngFor="let nav of navs"
      [routerLink]="nav.url"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: true}"
      >{{nav.content}}
    </a>
  </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  navs = [
    {url: '', content: 'Home'},
    {url: 'about', content: 'About'},
    {url: 'projects', content: 'Projects'}
  ]
}
