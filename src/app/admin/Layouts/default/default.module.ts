import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DoctorsComponent } from '../../../component/doctors/doctors.component';






@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DoctorsComponent 
   
 
   
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSnackBarModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
   
   
  ]
})
export class DefaultModule { }
