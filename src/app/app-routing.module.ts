import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';
import { ProjectOverviewComponent } from './pages/project-overview/project-overview.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
  },
  {
    path: 'project/:id',
    component: ProjectOverviewComponent,
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
