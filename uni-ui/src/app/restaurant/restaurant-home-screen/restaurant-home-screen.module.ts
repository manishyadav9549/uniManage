import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantHomeScreenComponent } from './restaurant-home-screen.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RestaurantHomeScreenComponent }
    ])
  ]
})
export class RestaurantHomeScreenModule { }
