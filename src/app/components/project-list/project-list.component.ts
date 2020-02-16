import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
