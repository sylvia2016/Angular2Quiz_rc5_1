import { RouterModule } from '@angular/router';

export const routing = RouterModule.forChild([
    { path: '', redirectTo: 'contact/list', pathMatch: 'full' },
    { path: 'contact', redirectTo: 'contact/list', pathMatch: 'full' },
]);
