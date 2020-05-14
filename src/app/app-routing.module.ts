import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CorporatePartnersComponent } from './corporate-partners/corporate-partners.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AllNewsRoutingComponent } from './all-news-routing/all-news-routing.component';
import { UpcomingEventsRoutingComponent } from './upcoming-events-routing/upcoming-events-routing.component';
import { OurAwardsRoutingComponent } from './our-awards-routing/our-awards-routing.component';
import { ReadMoreRoutingComponent } from './read-more-routing/read-more-routing.component';
import { NavBar1RoutingComponent } from './nav-bar1-routing/nav-bar1-routing.component';
import { AlumniRouterComponent} from './alumni-router/alumni-router.component';
import { OurApproachRouterComponent} from './our-approach-router/our-approach-router.component';
import { AboutUSRouterComponent} from './about-us-router/about-us-router.component';
import { StoriesNNewsRouterComponent} from './stories-nnews-router/stories-nnews-router.component';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { SoiRoutingComponent } from './soi-routing/soi-routing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApplyComponent } from '././apply/apply.component';
import { FooterComponent } from './footer/footer.component';
import {FooterRouterComponent} from './footer-router/footer-router.component'; 


const routes: Routes = [ 
  {path: '',
  redirectTo: "/homepage",
  pathMatch: 'full'},
  {path: 'opportunity-divide', component: OpportunityDivideComponent},
  {path: 'soi-routing', component: SoiRoutingComponent },
  { path: 'alumni', component: AlumniRouterComponent},
  { path:'our-approach', component: OurApproachRouterComponent },
  { path: 'about-us', component: AboutUSRouterComponent },
  { path: 'stories-and-news', component: StoriesNNewsRouterComponent },
  { path: 'all-news', component: AllNewsRoutingComponent},
  { path: 'upcoming-events', component:  UpcomingEventsRoutingComponent},
  { path: 'our-awards', component: OurAwardsRoutingComponent},
  { path: 'read-more', component: ReadMoreRoutingComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'apply', component: ApplyComponent },
  { path: 'footer-router', component: FooterComponent},
  { path: 'footer-link', component: FooterRouterComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'corporate-partners', component: CorporatePartnersComponent},
  { path: 'volunteers' , component: VolunteersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
