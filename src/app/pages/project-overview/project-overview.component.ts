import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ApiResponse } from 'src/app/models/response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.sass']
})
export class ProjectOverviewComponent implements OnInit {

  project: Project;
  owner: User;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe((payload: ApiResponse<Project>) => {
      this.project = payload.data;      
    });
  }

  isOwner(): boolean {
    return this.authService.isLoggedUser(this.project.owner);
  }

}
