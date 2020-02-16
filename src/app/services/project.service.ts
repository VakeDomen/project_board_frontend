import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = environment.apiUrl + '/projects';

  constructor(
    private http: HttpClient,
  ) { }

  getPublicProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl);
  }

  getAllProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl);
  }
}
