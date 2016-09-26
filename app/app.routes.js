"use strict";
var router_1 = require('@angular/router');
var routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'about', loadChildren: 'app/about/about.module' },
    { path: 'projects', loadChildren: 'app/projects/projects.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map