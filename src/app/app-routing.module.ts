import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './admin/Layouts/default/default.component';
import { DashboardComponent } from './admin/modules/dashboard/dashboard.component';
import { DoctorsComponent } from './component/doctors/doctors.component';



const routes: Routes = [

  {
    path:'admin/dashboard',
    component:DefaultComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'admin/doctors',
    component:DefaultComponent,
    children:[
      {
        path:'',
        component:DoctorsComponent
      }
    ]
  },
  
  {
    path:'',
    redirectTo:'/admin/dashboard',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/admin/dashboard',
    pathMatch:'full'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
