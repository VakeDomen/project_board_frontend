import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  apiUrl = environment.apiUrl + '/projects/ping/';

  constructor(
    private http: HttpClient,
  ) {}
  
  pingProject(project: Project): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(this.apiUrl + project.id);
  }

}

