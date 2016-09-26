import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

const routes = [
  {path: '', component: ProjectsComponent},
  {path: ':id', component:ProjectComponent}
];

export default RouterModule.forChild(routes)
