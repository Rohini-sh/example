import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private DashboardAPIData: any;

constructor() { }

public SetDashboardData(data: any) {
  this.DashboardAPIData = data;
}
public GetDashboardData() {
  return this.DashboardAPIData;
}

}
