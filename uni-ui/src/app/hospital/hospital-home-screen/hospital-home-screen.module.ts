import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHomeScreenComponent } from './hospital-home-screen.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [HospitalHomeScreenComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class HospitalHomeScreenModule { }
