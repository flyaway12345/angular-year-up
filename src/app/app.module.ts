import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
<<<<<<< HEAD
import { WCAPageComponent } from './wcapage/wcapage.component';
=======
import { LogoComponent } from './img/logo/logo.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { YearupSolutionComponent } from './yearup-solution/yearup-solution.component';
import { ImageSlidersComponent } from './image-sliders/image-sliders.component';
import { WhatYearupOffersComponent } from './what-yearup-offers/what-yearup-offers.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { StudentBannerComponent } from './student-banner/student-banner.component';


>>>>>>> 48f768bb2b9f5dfc684393d2b0e7facb81de7eaa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavHeaderComponent,
    WCAPageComponent
=======
    ImageSlidersComponent,
    SocialMediaComponent,
    NavHeaderComponent,
    LogoComponent,
    OpportunityDivideComponent,
    YearupSolutionComponent,
    WhatYearupOffersComponent,
    FooterComponent,
    HeroComponent,
    StudentBannerComponent,
>>>>>>> 48f768bb2b9f5dfc684393d2b0e7facb81de7eaa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
