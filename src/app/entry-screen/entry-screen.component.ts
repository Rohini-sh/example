import { DashboardserviceService } from './../services/dashboardservice.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { SharedService } from '../../shared/shared.service';
import { User } from '../services/User';
import { Router } from '@angular/router';


export interface AirlinesDropdown {
  value: string;
}

@Component({
  selector: 'app-entry-screen',
  templateUrl: './entry-screen.component.html',
  styleUrls: ['./entry-screen.component.css']
})
export class EntryScreenComponent implements OnInit {
  hie: boolean=false;
  monthSelected: any;
  airlinesName: any[]=[];
  airlinesArray: any[]=[];
  a = 0;
  i: number;
  years: number[] = new Array(60);
  airlineName: string;
  monthsArray: any[]=[];
totalYears: any[]= [];
    otp: string;
    isDisabled:boolean=false;
    private isButtonVisible = false;



  yearSelected: any;
// console.log(this.months);

  constructor(private dashboardserviceService: DashboardserviceService, private _shared: SharedService, private router: Router, private _apiservice: DashboardserviceService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.monthsArray = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentYear = (new Date()).getFullYear();
    for (this.years[this.a] = currentYear - 30; this.years[this.a] <= currentYear + 30; this.years[this.a]++) {
    for (let j = 0; j <= this.a; j++) {
        this.years[j] = this.years[this.a];
        this.totalYears.push(this.years[j]);
        }
      }
    console.log(this.totalYears);

    //dropdown
    this._apiservice.gettingdb().subscribe(data => {
      this.airlinesName = data;
      console.log(this.airlinesName);
      this.airlinesName.forEach(ele=>{
      this.airlinesArray.push(ele.airlineName);
      });
      console.log(this.airlinesArray);
     });
  }

  onMonthSelect(value: any) {
    this.monthSelected = value;
      console.log(value);

  }
  onYearSelect(value: any) {
    console.log(value);
    this.yearSelected = value;
}
onAirlineSelect(value: any) {
  console.log(value);
  this.airlineName = value;
}
  submit() {
    const request: any = {
         'airlineName': this.airlineName,
          'otp': this.otp,
         'month': this.monthSelected,
         'year': this.yearSelected
     };
    this.dashboardserviceService.dashboard(request).map(data => data).subscribe(async data => {
      console.log(data);
      console.log("haha");
      if (data.result == true) {
        console.log("hahappp");
      this.router.navigateByUrl('home');
      console.log('home');
      }
    });
    }

visi(){
  this.hie = true;
  this.isDisabled=true;
}


  cancel() {
      window.location.reload();
  }
}
