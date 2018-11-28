import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperParkingComponent } from './stepper-parking.component';

describe('StepperParkingComponent', () => {
  let component: StepperParkingComponent;
  let fixture: ComponentFixture<StepperParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
