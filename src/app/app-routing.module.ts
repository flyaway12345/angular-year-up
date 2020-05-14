import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [ 
  { path: 'opportunity-divide', component: NavBar1RoutingComponent },
  { path: 'alumni', component: AlumniRouterComponent},
  { path:'our-approach', component: OurApproachRouterComponent },
  { path: 'about-us', component: AboutUSRouterComponent },
  { path: 'stories-and-news', component: StoriesNNewsRouterComponent },
  {path: 'all-news', component: AllNewsRoutingComponent},
  {path: 'upcoming-events', component:  UpcomingEventsRoutingComponent},
  {path: 'our-awards', component: OurAwardsRoutingComponent},
  {path: 'read-more', component: ReadMoreRoutingComponent},
   {path: 'opportunity-divide', component: OpportunityDivideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
