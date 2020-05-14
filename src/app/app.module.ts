import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { HomeNavComponent } from './home-nav/home-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    OpportunityDivideComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
