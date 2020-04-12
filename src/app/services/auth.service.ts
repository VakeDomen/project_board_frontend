import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/response';
import { LocalCredentials } from '../models/local.credentials';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/auth/';
  private token = 'JWTtoken';
  private user = 'user';
  

  constructor(
    private http: HttpClient,
  ) { }

  isLoggedIn(): boolean {
    if (!sessionStorage.getItem(this.token)) {
      return false;
    }
    return true;
  }

  getJWTtoken(): string {
    return sessionStorage.getItem(this.token);
  }  

  logout(): void {
    sessionStorage.removeItem(this.token);
    sessionStorage.removeItem(this.user);
  }

  isLoggedUser(id: string): boolean {
    const user = sessionStorage.getItem(this.user);
    if (user && (JSON.parse(user).id === id)) {
      return true;
    }
    return false;
  }

  async loginLocal(credentials: LocalCredentials): Promise<boolean> {
    try {
      const response: ApiResponse<any> = await this.http.post<ApiResponse<any>>(this.apiUrl + 'local/login', credentials).toPromise();
      sessionStorage.setItem(this.token, response.data.token);
      sessionStorage.setItem(this.user, JSON.stringify(response.data.user));
    } catch(error) {
      return false;
    }
    return true;
  }

  async registerLocal(user: User): Promise<boolean> {
    try{
      const response: ApiResponse<null> = await this.http.post<ApiResponse<null>>(this.apiUrl + 'session/register', user).toPromise();
    } catch (err) {
      return false;
    }
    return false;
  }

}
