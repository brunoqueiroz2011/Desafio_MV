import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CnestiposComponent } from './cnestipos/cnestypes.component';
import { CnesstateComponent } from './cnesstate/cnesstate.component';
import { CneslistComponent } from './cneslist/cneslist.component';
import { CnesreportsComponent } from './cnesreports/cnesreports.component';


export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent} ,
    {path:'cneslista', component: CneslistComponent},
    {path:'cnestipos', component: CnestiposComponent},
    {path:'cnesestados', component: CnesstateComponent},
    {path:'cnesrelatorios', component: CnesreportsComponent}
]