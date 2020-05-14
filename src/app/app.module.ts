import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fontawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { WCAPageComponent } from './wcapage/wcapage.component';
<<<<<<< HEAD
import { NavBar1RoutingComponent } from './nav-bar1-routing/nav-bar1-routing.component';
import { AlumniRouterComponent } from './alumni-router/alumni-router.component';
import { AboutUSRouterComponent } from './about-us-router/about-us-router.component';
import { StoriesNNewsRouterComponent } from './stories-nnews-router/stories-nnews-router.component';
import { OurApproachRouterComponent } from './our-approach-router/our-approach-router.component';
=======
>>>>>>> c6d2ba4108343f5a4f3938725bc15546915371b6
import { LogoComponent } from './img/logo/logo.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { YearupSolutionComponent } from './yearup-solution/yearup-solution.component';
import { ImageSlidersComponent } from './image-sliders/image-sliders.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { WhatYearupOffersComponent } from './what-yearup-offers/what-yearup-offers.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ANewPipelineOfTalentComponent } from './a-new-pipeline-of-talent/a-new-pipeline-of-talent.component';
import { StudentBannerComponent } from './student-banner/student-banner.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';


<<<<<<< HEAD

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
=======
@NgModule({
  declarations: [
    AppComponent,
    ImageSlidersComponent,
    HowToApplyComponent,
    NavHeaderComponent,
    WCAPageComponent,
>>>>>>> c6d2ba4108343f5a4f3938725bc15546915371b6
    ImageSlidersComponent,
    SocialMediaComponent,
    NavHeaderComponent,
    LogoComponent,
    OpportunityDivideComponent,
    YearupSolutionComponent,
    WhatYearupOffersComponent,
    FooterComponent,
    HeroComponent,
    ANewPipelineOfTalentComponent,
    StudentBannerComponent,
<<<<<<< HEAD
=======
    BecomeAPartnerComponent
>>>>>>> c6d2ba4108343f5a4f3938725bc15546915371b6
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
