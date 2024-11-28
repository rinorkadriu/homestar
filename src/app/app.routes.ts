import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root path to 'home'
    { path: '**', redirectTo: 'home' } // Redirect unknown paths to 'home'
];