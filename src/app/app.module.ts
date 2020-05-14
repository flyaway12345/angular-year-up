import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LogoComponent } from './img/logo/logo.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { YearupSolutionComponent } from './yearup-solution/yearup-solution.component';
import { ReadMoreRoutingComponent } from './read-more-routing/read-more-routing.component';
import { OurAwardsRoutingComponent } from './our-awards-routing/our-awards-routing.component';
import { UpcomingEventsRoutingComponent } from './upcoming-events-routing/upcoming-events-routing.component';
import { AllNewsRoutingComponent } from './all-news-routing/all-news-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    NavHeaderComponent,
    LogoComponent,
    OpportunityDivideComponent,
    YearupSolutionComponent,
    ReadMoreRoutingComponent,
    OurAwardsRoutingComponent,
    UpcomingEventsRoutingComponent,
    AllNewsRoutingComponent,
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
