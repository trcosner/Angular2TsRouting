import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';
import projectsRoutes from './projects.routes';


@NgModule({
  imports: [CommonModule, projectsRoutes],
  declarations: [ProjectsComponent, ProjectComponent]
})
export default class ProjectsModule{}
