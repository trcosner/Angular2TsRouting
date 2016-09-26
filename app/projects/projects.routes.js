"use strict";
var router_1 = require('@angular/router');
var projects_component_1 = require('./projects.component');
var project_component_1 = require('./project.component');
var routes = [
    { path: '', component: projects_component_1.ProjectsComponent },
    { path: ':id', component: project_component_1.ProjectComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=projects.routes.js.map