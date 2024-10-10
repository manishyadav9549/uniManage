import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { MessagesModule } from 'primeng/messages'; 
import { MessageModule } from 'primeng/message'; 
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { StudentHomeScreenComponent } from './school/student-home-screen/student-home-screen.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AdminHomeScreenComponent } from './school/admin-home-screen/admin-home-screen.component';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { LoaderrComponent } from './loaderr/loaderr.component';
import { HospitalHomeScreenComponent } from './hospital/hospital-home-screen/hospital-home-screen.component';
import { RestaurantHomeScreenComponent } from './restaurant/restaurant-home-screen/restaurant-home-screen.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentHomeScreenComponent,
    AdminHomeScreenComponent,
    LoaderrComponent,
    HospitalHomeScreenComponent,
    RestaurantHomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    MessagesModule,
    DialogModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    PanelModule,
    ReactiveFormsModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
