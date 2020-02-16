import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
import { PingService } from 'src/app/services/ping.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})
export class ProjectCardComponent implements OnChanges {

  @Input() project: Project;
  isOnline: boolean;

  constructor(
    private pingService: PingService,
  ) { }

  ngOnChanges() {
    this.pingService.isOnline(this.project.url, this.setOnline);
  }


  setOnline(online: boolean): void {
    this.isOnline = online;
  }

}
