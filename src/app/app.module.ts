import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './img/logo/logo.component';
import { ConnectWYearUpComponent } from './connect-wyear-up/connect-wyear-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ConnectWYearUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
