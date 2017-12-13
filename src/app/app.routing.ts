import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const ROUTES: Routes = [
    { path: '404', component: NotfoundComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/404' },
];
