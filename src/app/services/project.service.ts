import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { ApiResponse } from '../models/response';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = environment.apiUrl + '/projects';  

  constructor(
    private http: HttpService,
  ) { }

  getPublicProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl);
  }

  getAllProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl);
  }

  submitNewProject(project: Project): Observable<ApiResponse<Project[]>> {
    return this.http.post<ApiResponse<Project[]>>(this.apiUrl, project);
  }
  
}
