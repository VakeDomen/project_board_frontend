import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.sass']
})
export class ProjectDashboardComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.projectService
      .getPublicProjects()
      .subscribe(
        (data: ApiResponse<Project[]>) => this.handleProjects(data), 
        (err: ApiResponse<any>) => this.handleError(err)
      );
  }

  handleProjects(projects: ApiResponse<Project[]>): void {
    this.projects = projects.data;
  }

  handleError(error: ApiResponse<any>): void {
    console.log(error);
  }
}
