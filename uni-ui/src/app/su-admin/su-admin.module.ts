import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuAdminComponent } from './su-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { AuthGuard } from '../auth.guard';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';


const routes: Routes = [
  {path: '', component: SuAdminComponent, canActivate: [AuthGuard] }
]


@NgModule({
  declarations: [
    SuAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    MenuModule,
    ToastModule,
    TableModule,
    ConfirmDialogModule,
    RouterModule.forChild(routes),
  ],
  providers: [ConfirmationService]
})
export class SuAdminModule { }
