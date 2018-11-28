import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperUserComponent } from './stepper-user.component';

describe('StepperUserComponent', () => {
  let component: StepperUserComponent;
  let fixture: ComponentFixture<StepperUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
