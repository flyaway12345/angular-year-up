import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { WCAPageComponent } from './wcapage/wcapage.component';
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
import { SoiRoutingComponent } from './soi-routing/soi-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSlidersComponent,
    HowToApplyComponent,
    NavHeaderComponent,
    WCAPageComponent,
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
    BecomeAPartnerComponent,
    SoiRoutingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
