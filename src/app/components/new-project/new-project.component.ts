import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { ApiResponse } from 'src/app/models/response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.sass']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  modalOpen: boolean = false;

  @Output() newProject = new EventEmitter<Project>();

  constructor(
    private projectService: ProjectService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.project = new Project({});
  }

  submit() {
    this.projectService.submitNewProject(this.project).subscribe((response: ApiResponse<Project[]>) => {
      this.newProject.emit(response.data.pop());
    }, err => {
      console.log(err);
    })
  }

}
