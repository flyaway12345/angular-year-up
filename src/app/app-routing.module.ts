import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityDivideComponent } from './opportunity-divide/opportunity-divide.component';


const routes: Routes = [
  {path: 'opportunity-divide', component: OpportunityDivideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
