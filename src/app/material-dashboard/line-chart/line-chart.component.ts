import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardserviceService } from '../../services/dashboardservice.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnInit {
 airlinesName : any[]=[];
  lineChart = [];
  airlineSelected: any;
  chartData : any[]=[];
  chartOtp : any[]=[];
  chartYear : any[]=[];
  chartMonth : any[]=[];
  @ViewChild('canvas', {static: true}) canvasRef: ElementRef;
  airlinesArray: any[]=[];
  airlinesChartArray: any[]=[];
  yearArray: any[]=[];
  monthArray: any[]=[];
  sortedArray: any[]=[];
  monthyearArray: any[]=[];
  monthArrayList: any[]=[];
  filterredDataArray: any[]=[];
  sortedData: any[];
  filteredArray: any[]=[];
  filteredArrayData: any[]=[];
  otpArray : any[]=[];


  // tslint:disable-next-line: variable-name
  constructor(private _apiservice: DashboardserviceService) { }

  ngOnInit() {
    this._apiservice.gettingdb().subscribe(data => {
     this.airlinesName = data;
     console.log(this.airlinesName);
     this.airlinesName.forEach(ele=>{
     this.airlinesArray.push(ele.airlineName);
     });
     console.log(this.airlinesArray);
    });
    // this.sortedData = _.orderBy(data.result, [(datas) => datas.year, (user) => (this.monthArrayList.indexOf(user.month))], ["asc", "asc"]);

  }

   onAirlineSelect(value: any) {
    console.log(value);
    this.airlineSelected = value;
   }
   yearData: any[]= [];

  airlinesNameArray(value: any) {
    console.log(value);
    const request: any = {
      'airlineName': value,
  }
    this._apiservice.gettingdata(request).map(data => data).subscribe(async data => {
  //  console.log(data);
   this.monthArrayList = ['January','Febraury','March','April','May','June','July','August','September','October','November','December']
   console.log("filtered data");
   this.filteredArray =  data.result.sort(
    (a, b) => (a.year - b.year) || (this.monthArrayList.indexOf(a.month) - this.monthArrayList.indexOf(b.month))
   );

   console.log(this.filteredArray);

  //  this.filteredArray.forEach(Eleme=> {
  //    filteredArrayData.push()
  //  })
  //  data.result.forEach(data=> {
  //   otpArray.push(data.otp);
  //  })
  //  var dateArray = [];
  //  data.result.forEach(data=>{
  //    dateArray.push(data.year);
  //  })
  console.log(this.filteredArray);

   this.filteredArray.forEach(data=>{
     var myString = data.month + " " + data.year;
     this.monthArray.push(myString);
     this.otpArray.push(data.otp);
   });
   console.log(this.otpArray);


  //  this.chartOtp = otpArray;
  //  console.log(this.chartOtp);
  //  this.chartYear = dateArray;
  //  console.log(this.chartYear);
   this.chartMonth = this.monthArray;
  //  console.log(this.chartMonth);
   this.gettingChart();
      });
    }

    gettingChart(){
      console.log(this.monthArray);

      this.lineChart = new Chart(this.canvasRef.nativeElement.getContext('2d'), {
        type: 'line',

        data: {
        labels: this.monthArray,
        datasets: [{
           data: this.otpArray,
        }]
        },
        options: {
        title: {
           text: 'Line Chart',
           display: false
        },
        scales: {
          xAxes: [{
            display: true
         }],
           yAxes: [{
              display: true
           }]
        }
        }
        });
    }

    btnClick = function() {
      this.router.navigateByUrl('entry-screen');
    }

  }
