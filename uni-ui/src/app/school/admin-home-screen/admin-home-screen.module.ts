import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHomeScreenComponent } from './admin-home-screen.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminHomeScreenComponent }
    ])
  ]
})
export class AdminHomeScreenModule { }
