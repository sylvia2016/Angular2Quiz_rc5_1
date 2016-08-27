"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', loadChildren: 'app/components/contact/contact.module' },
    { path: 'class', loadChildren: 'app/components/class/class.module' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map