import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private http: HttpClient,
        private auth: AuthService,
    ) { }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json' ,
            'Access-Control-Allow-Credentials': 'true',
          }),
    }

    refreshAuthorizationHeader(): void {
        if (this.auth.isLoggedIn()) {
            this.httpOptions.headers.append('Authorization', 'Bearer ' + this.auth.getJWTtoken());
        } else {
            this.httpOptions.headers.delete('Authorization');
        }
    }

    get<T>(url): Observable<T> {
        this.refreshAuthorizationHeader();
        return this.http.get<T>(url, this.httpOptions);
    }

    post<T>(url, data): Observable<T> {
        this.refreshAuthorizationHeader();
        return this.http.post<T>(url, data, this.httpOptions);
    }

    patch<T>(url, data): Observable<T> {
        this.refreshAuthorizationHeader();
        return this.http.patch<T>(url, data, this.httpOptions);
    }

    delete<T>(url): Observable<T> {
        this.refreshAuthorizationHeader();
        return this.http.delete<T>(url, this.httpOptions);
    }
}