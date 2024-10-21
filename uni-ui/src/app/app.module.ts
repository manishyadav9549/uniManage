import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageModule } from 'primeng/message'; 
import { ToastModule } from 'primeng/toast';
import { LoaderrComponent } from './commons/loaderr/loaderr.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { StudentHomeScreenModule } from './school/student-home-screen/student-home-screen.module';
import { AdminHomeScreenModule } from './school/admin-home-screen/admin-home-screen.module';
import { SuAdminModule } from './su-admin/su-admin.module';
import { HospitalHomeScreenModule } from './hospital/hospital-home-screen/hospital-home-screen.module';
@NgModule({
  declarations: [AppComponent,
    LoaderrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    StudentHomeScreenModule,
    AdminHomeScreenModule,
    SuAdminModule,
    HospitalHomeScreenModule,
    MessageModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
