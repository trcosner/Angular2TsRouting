import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/map";

@Component({
  template: `
    project {{id | async}}
  `
})
export class ProjectComponent{
  id;

  constructor(private route:ActivatedRoute){
    this.id= route.params.map((p: any) => p.id);
  }
}
