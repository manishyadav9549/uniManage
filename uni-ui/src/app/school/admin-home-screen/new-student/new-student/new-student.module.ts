import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentComponent } from './new-student.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

const routes: Routes = [
  { path: '', component: NewStudentComponent}
]

@NgModule({
  declarations: [
    NewStudentComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    InputSwitchModule,
    RouterModule.forChild(routes)
  ]
})
export class NewStudentModule { }
