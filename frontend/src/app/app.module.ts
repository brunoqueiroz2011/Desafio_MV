import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CnestiposComponent } from './cnestipos/cnestypes.component';
import { CnesTypesService } from './cnestipos/cnestypes.service';
import { CnesstateComponent } from './cnesstate/cnesstate.component';
import { CnesStateService } from './cnesstate/cnesstate.service';
import { CneslistComponent } from './cneslist/cneslist.component';
import { CnesListService } from './cneslist/cneslist.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CnestiposComponent,
    CnesstateComponent,
    CneslistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CnesTypesService, CnesStateService, CnesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
