import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { first } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(
    private http: HttpClient
  ) {}

  private ping(address: string): Observable<HttpResponse<Object>> {
    return this.http.get("http://" + address, { observe: 'response' }).pipe(first());
  }

  isOnline(address: string, next): void {
    this.ping(address).subscribe(resp => {
      if (resp.status === 200) {
        next(true);
      } else {
        next(false);
      }
    }), err => next(false);
  }
}

