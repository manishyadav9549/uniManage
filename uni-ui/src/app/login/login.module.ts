import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { TableModule } from 'primeng/table';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
    // AppModule,
    TableModule,
  ]
})
export class LoginModule { }
