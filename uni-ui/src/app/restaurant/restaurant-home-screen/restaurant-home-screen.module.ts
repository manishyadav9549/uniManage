import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantHomeScreenComponent } from './restaurant-home-screen.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [RestaurantHomeScreenComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: RestaurantHomeScreenComponent }
    ])
  ]
})
export class RestaurantHomeScreenModule { }
