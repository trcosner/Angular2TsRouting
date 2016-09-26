import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes = [
  {path: '', component: AboutComponent}
];

export default RouterModule.forChild(routes)
