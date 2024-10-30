import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeScreenComponent } from './admin-home-screen.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {path: '', component: AdminHomeScreenComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [AdminHomeScreenComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ToolbarModule,
    MenuModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminHomeScreenModule { }
