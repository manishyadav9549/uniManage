import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomeScreenComponent } from './restaurant-home-screen.component';

describe('RestaurantHomeScreenComponent', () => {
  let component: RestaurantHomeScreenComponent;
  let fixture: ComponentFixture<RestaurantHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
