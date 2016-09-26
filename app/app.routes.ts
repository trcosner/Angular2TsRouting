import { RouterModule } from '@angular/router';

const routes = [
  {path: '', loadChildren: 'app/home/home.module'},
  {path: 'about', loadChildren: 'app/about/about.module'},
  {path: 'projects', loadChildren: 'app/projects/projects.module'}
];

export default RouterModule.forRoot(routes)
