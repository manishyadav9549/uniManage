import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderrComponent } from './loaderr.component';

describe('LoaderrComponent', () => {
  let component: LoaderrComponent;
  let fixture: ComponentFixture<LoaderrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
