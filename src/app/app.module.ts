import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectDashboardComponent,
    ProjectCardComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
