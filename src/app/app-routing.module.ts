import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryScreenComponent } from './entry-screen/entry-screen.component';
import { LineChartComponent } from './material-dashboard/line-chart/line-chart.component';


const routes: Routes = [

  {path:'home', component:LineChartComponent},
  {path:'entry-screen', component:EntryScreenComponent },
  {path:'', component:EntryScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
