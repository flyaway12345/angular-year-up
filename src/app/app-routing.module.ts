import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBar1RoutingComponent } from './nav-bar1-routing/nav-bar1-routing.component';
import { AlumniRouterComponent} from './alumni-router/alumni-router.component';
import { OurApproachRouterComponent} from './our-approach-router/our-approach-router.component';
import { AboutUSRouterComponent} from './about-us-router/about-us-router.component';
import { StoriesNNewsRouterComponent} from './stories-nnews-router/stories-nnews-router.component';

const routes: Routes = [ 
  { path: 'opportunity-divide', component: NavBar1RoutingComponent },
  { path: 'alumni', component: AlumniRouterComponent},
  { path:'our-approach', component: OurApproachRouterComponent },
  { path: 'about-us', component: AboutUSRouterComponent },
  { path: 'stories-and-news', component: StoriesNNewsRouterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
