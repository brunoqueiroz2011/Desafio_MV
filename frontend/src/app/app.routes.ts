import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent} ,
    {path:'cneslista', component: HomeComponent},
    {path:'cnestipos', component: HomeComponent},
    {path:'cnesestados', component: HomeComponent},
    {path:'cnesrelatorios', component: HomeComponent}
]