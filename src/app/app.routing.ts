import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SampleComponent } from './sample/sample.component';
import { BeforeunloadGuard } from './sample/beforeunload.guard';

export const ROUTES: Routes = [
    { path: 'sample', component: SampleComponent, canDeactivate: [BeforeunloadGuard] },
    { path: '404', component: NotfoundComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/404' },
];
