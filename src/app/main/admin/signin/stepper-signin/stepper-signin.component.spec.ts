import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSigninComponent } from './stepper-signin.component';

describe('StepperSigninComponent', () => {
  let component: StepperSigninComponent;
  let fixture: ComponentFixture<StepperSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
