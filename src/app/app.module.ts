import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeadlinesComponent } from './headlines/headlines.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { FontAwesomeModule } from '@fontawesome/angular-fontawesome';
>>>>>>> 299d88fbe5ac36aeafd1aacfa8527a477cbd7bac
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { WCAPageComponent } from './wcapage/wcapage.component';
import { NavBar1RoutingComponent } from './nav-bar1-routing/nav-bar1-routing.component';
import { AlumniRouterComponent } from './alumni-router/alumni-router.component';
import { AboutUSRouterComponent } from './about-us-router/about-us-router.component';
import { StoriesNNewsRouterComponent } from './stories-nnews-router/stories-nnews-router.component';
import { OurApproachRouterComponent } from './our-approach-router/our-approach-router.component';
import { LogoComponent } from './img/logo/logo.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { YearupSolutionComponent } from './yearup-solution/yearup-solution.component';
import { ReadMoreRoutingComponent } from './read-more-routing/read-more-routing.component';
import { OurAwardsRoutingComponent } from './our-awards-routing/our-awards-routing.component';
import { UpcomingEventsRoutingComponent } from './upcoming-events-routing/upcoming-events-routing.component';
import { AllNewsRoutingComponent } from './all-news-routing/all-news-routing.component';
import { ImageSlidersComponent } from './image-sliders/image-sliders.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { WhatYearupOffersComponent } from './what-yearup-offers/what-yearup-offers.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ANewPipelineOfTalentComponent } from './a-new-pipeline-of-talent/a-new-pipeline-of-talent.component';
import { StudentBannerComponent } from './student-banner/student-banner.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WCAPageComponent,
    NavBar1RoutingComponent,
    AlumniRouterComponent,
    AboutUSRouterComponent,
    StoriesNNewsRouterComponent,
    OurApproachRouterComponent,
    ImageSlidersComponent,
    HowToApplyComponent,
    NavHeaderCoSlidermponent,
    WCAPageComponent,
    ImagesComponent,
    SocialMediaComponent,
    NavHeaderComponent,
    LogoComponent,
    OpportunityDivideComponent,
    YearupSolutionComponent,
    ReadMoreRoutingComponent,
    OurAwardsRoutingComponent,
    UpcomingEventsRoutingComponent,
    AllNewsRoutingComponent,
<<<<<<< HEAD
    HeadlinesComponent,
=======
    WhatYearupOffersComponent,
    FooterComponent,
    HeroComponent,
    ANewPipelineOfTalentComponent,
    StudentBannerComponent,
    BecomeAPartnerComponent

>>>>>>> 299d88fbe5ac36aeafd1aacfa8527a477cbd7bac
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
