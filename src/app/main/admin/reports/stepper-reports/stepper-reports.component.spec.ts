import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperReportsComponent } from './stepper-reports.component';

describe('StepperReportsComponent', () => {
  let component: StepperReportsComponent;
  let fixture: ComponentFixture<StepperReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
