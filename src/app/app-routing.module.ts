import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllNewsRoutingComponent } from './all-news-routing/all-news-routing.component';
import { UpcomingEventsRoutingComponent } from './upcoming-events-routing/upcoming-events-routing.component';
import { OurAwardsRoutingComponent } from './our-awards-routing/our-awards-routing.component';
import { ReadMoreRoutingComponent } from './read-more-routing/read-more-routing.component';


const routes: Routes = [
  {path: 'all-news', component: AllNewsRoutingComponent},
  {path: 'upcoming-events', component:  UpcomingEventsRoutingComponent},
  {path: 'our-awards', component: OurAwardsRoutingComponent},
  {path: 'read-more', component: ReadMoreRoutingComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
