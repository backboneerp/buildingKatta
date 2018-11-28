import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVisitorComponent } from './stepper-visitor.component';

describe('StepperVisitorComponent', () => {
  let component: StepperVisitorComponent;
  let fixture: ComponentFixture<StepperVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
