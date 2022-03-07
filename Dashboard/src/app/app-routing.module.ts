import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { NotificationComponent } from './notification/notification.component';
import { PopularplansComponent } from './popularplans/popularplans.component';

const routes: Routes = [
  {
    path:'user',
    children:[
      {
        path:'popularplans',
        component:PopularplansComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'addRecharge',
        component:DetailsComponent
      },{
        path:'notification',
        component:NotificationComponent
      },{
        path:'getRecharge',
        component:HistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
