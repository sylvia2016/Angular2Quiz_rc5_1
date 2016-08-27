import {
    Routes,
    RouterModule
} from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', loadChildren: 'app/components/contact/contact.module' },
    { path: 'class', loadChildren: 'app/components/class/class.module' }
];

export const routing = RouterModule.forRoot(routes);