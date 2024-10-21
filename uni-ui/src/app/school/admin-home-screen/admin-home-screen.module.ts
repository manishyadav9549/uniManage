import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHomeScreenComponent } from './admin-home-screen.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [AdminHomeScreenComponent],
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminHomeScreenComponent }
    ])
  ]
})
export class AdminHomeScreenModule { }
