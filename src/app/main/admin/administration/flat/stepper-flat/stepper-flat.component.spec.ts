import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFlatComponent } from './stepper-flat.component';

describe('StepperFlatComponent', () => {
  let component: StepperFlatComponent;
  let fixture: ComponentFixture<StepperFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
