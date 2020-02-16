import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
import { PingService } from 'src/app/services/ping.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})
export class ProjectCardComponent implements OnChanges {

  @Input() project: Project;
  isOnline: boolean = false;
  pinged: boolean = false;

  constructor(
    private pingService: PingService,
  ) { }

  ngOnChanges() {
    this.pingService.pingProject(this.project).subscribe((succ: ApiResponse<boolean>) => {
      this.isOnline = succ.data;
    })  
  }


}
