import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuAdminComponent } from './su-admin.component';

describe('SuAdminComponent', () => {
  let component: SuAdminComponent;
  let fixture: ComponentFixture<SuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
