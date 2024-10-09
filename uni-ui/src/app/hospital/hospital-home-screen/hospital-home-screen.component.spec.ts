import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalHomeScreenComponent } from './hospital-home-screen.component';

describe('HospitalHomeScreenComponent', () => {
  let component: HospitalHomeScreenComponent;
  let fixture: ComponentFixture<HospitalHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
