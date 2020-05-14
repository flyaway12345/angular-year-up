import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';
import { SoiRoutingComponent } from './soi-routing/soi-routing.component';

const routes: Routes = [
  {path: 'opportunity-divide', component: OpportunityDivideComponent},
  {path: 'soi-routing', component: SoiRoutingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
