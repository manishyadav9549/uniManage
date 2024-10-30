import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeScreenComponent } from './student-home-screen.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes = [
  {path: '', component: StudentHomeScreenComponent, canActivate: [AuthGuard] }
]



@NgModule({
  declarations: [StudentHomeScreenComponent],
  imports: [
    ToolbarModule,
    PanelModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentHomeScreenModule { }
