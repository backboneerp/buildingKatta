import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperConfigComponent } from './stepper-config.component';

describe('StepperConfigComponent', () => {
  let component: StepperConfigComponent;
  let fixture: ComponentFixture<StepperConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
