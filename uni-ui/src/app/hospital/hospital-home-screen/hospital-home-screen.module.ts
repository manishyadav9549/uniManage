import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHomeScreenComponent } from './hospital-home-screen.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [HospitalHomeScreenComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class HospitalHomeScreenModule { }
