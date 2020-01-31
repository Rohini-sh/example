/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardserviceService } from './dashboardservice.service';

describe('Service: Dashboardservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardserviceService]
    });
  });

  it('should ...', inject([DashboardserviceService], (service: DashboardserviceService) => {
    expect(service).toBeTruthy();
  }));
});
