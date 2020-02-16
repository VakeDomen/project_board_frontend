import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
  },
  {
    path: '**',
    component: ProjectDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
