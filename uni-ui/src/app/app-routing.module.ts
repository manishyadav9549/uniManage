import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentHomeScreenComponent } from './school/student-home-screen/student-home-screen.component';
import { HospitalHomeScreenComponent } from './hospital/hospital-home-screen/hospital-home-screen.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'student', component: StudentHomeScreenComponent },
  { path: 'hospital', component: HospitalHomeScreenComponent},
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant-home-screen/restaurant-home-screen.module').then(m => m.RestaurantHomeScreenModule) },
  { path: 'school-admin', loadChildren: () => import('./school/admin-home-screen/admin-home-screen.module').then(m => m.AdminHomeScreenModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
