import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperRoleComponent } from './stepper-role.component';

describe('StepperRoleComponent', () => {
  let component: StepperRoleComponent;
  let fixture: ComponentFixture<StepperRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
