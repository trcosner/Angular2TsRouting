import { Component } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  template: `
    <div *ngFor="let project of projects$ | async">
    <a [routerLink]="project.name">
    {{project.name}}
    </a>
    </div>
  `
})

export class ProjectsComponent{
  projects$;

  constructor(private http: Http){
    this.projects$ = http.get('https://api.github.com/users/trcosner/repos')
      .map(res => res.json());
  }
};
