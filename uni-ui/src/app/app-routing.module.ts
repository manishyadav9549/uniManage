import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HospitalHomeScreenComponent } from './hospital/hospital-home-screen/hospital-home-screen.component';


const routes: Routes = [
  { path: '', component : HospitalHomeScreenComponent },
  { path: 'student', loadChildren: () => import('./school/student-home-screen/student-home-screen.module').then(m => m.StudentHomeScreenModule) },
  { path: 'hospital', loadChildren: () => import('./hospital/hospital-home-screen/hospital-home-screen.module').then(m => m.HospitalHomeScreenModule) },
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant-home-screen/restaurant-home-screen.module').then(m => m.RestaurantHomeScreenModule) },
  { path: 'school-admin', loadChildren: () => import('./school/admin-home-screen/admin-home-screen.module').then(m => m.AdminHomeScreenModule) },
  { path: 'su-admin', loadChildren: () => import('./su-admin/su-admin.module').then(m => m.SuAdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
