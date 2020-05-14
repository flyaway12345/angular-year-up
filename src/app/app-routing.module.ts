import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CorporatePartnersComponent } from './corporate-partners/corporate-partners.component';
import { VolunteersComponent } from './volunteers/volunteers.component';


const routes: Routes = [
  { path: 'students', component: StudentsComponent},
  { path: 'corporate-partners', component: CorporatePartnersComponent},
  { path: 'volunteers' , component: VolunteersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
