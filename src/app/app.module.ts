import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './img/logo/logo.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { YearupSolutionComponent } from './yearup-solution/yearup-solution.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    OpportunityDivideComponent,
    YearupSolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
