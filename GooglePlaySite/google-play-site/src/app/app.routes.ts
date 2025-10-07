import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./applications/applications').then(m => m.Applications)
    }
];
