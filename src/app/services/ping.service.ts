import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  apiUrl = environment.apiUrl + '/projects/ping/';

  constructor(
    private http: HttpService,
  ) {}
  
  pingProject(project: Project): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(this.apiUrl + project.id);
  }

}

