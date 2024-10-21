import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeScreenComponent } from './student-home-screen.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [StudentHomeScreenComponent],
  imports: [
    ToolbarModule,
    PanelModule,
    CommonModule
  ]
})
export class StudentHomeScreenModule { }
