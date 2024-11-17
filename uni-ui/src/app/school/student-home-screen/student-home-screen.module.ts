import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeScreenComponent } from './student-home-screen.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { MenuModule } from 'primeng/menu';
import { SProfileComponent } from './s-profile/s-profile.component';


const routes: Routes = [
  {path: '', component: StudentHomeScreenComponent, canActivate: [AuthGuard] }
  // {path: 's-profile', component: SProfileComponent}
]



@NgModule({
  declarations: [StudentHomeScreenComponent],
  imports: [
    ToolbarModule,
    PanelModule,
    CommonModule,
    MenuModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentHomeScreenModule { }
