import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  dashboardAPIURL: string;
  finalAPIURL: string;
  anotherAPIURL: string;

constructor(private http: HttpClient) {
  this.dashboardAPIURL = 'http://192.168.43.233:3300/routesImpl/dashboard';

  this.finalAPIURL = 'http://192.168.43.233:3300/routesImpl/gettingdb';

  this.anotherAPIURL = 'http://192.168.43.233:3300/routesImpl/gettingdata';
}

  public dashboard(request: any): Observable<any> {
    return this.http.post(this.dashboardAPIURL, request);
  }

  public gettingdb(): Observable<any> {
    return this.http.get(this.finalAPIURL);
  }

  public gettingdata(request: any): Observable<any> {
    return this.http.post(this.anotherAPIURL, request);
  }

}
