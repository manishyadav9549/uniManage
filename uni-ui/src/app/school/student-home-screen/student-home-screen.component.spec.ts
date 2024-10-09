import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeScreenComponent } from './student-home-screen.component';

describe('StudentHomeScreenComponent', () => {
  let component: StudentHomeScreenComponent;
  let fixture: ComponentFixture<StudentHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
