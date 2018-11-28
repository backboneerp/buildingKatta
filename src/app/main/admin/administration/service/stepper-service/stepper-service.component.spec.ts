import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperServiceComponent } from './stepper-service.component';

describe('StepperServiceComponent', () => {
  let component: StepperServiceComponent;
  let fixture: ComponentFixture<StepperServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
