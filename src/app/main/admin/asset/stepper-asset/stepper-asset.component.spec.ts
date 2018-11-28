import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAssetComponent } from './stepper-asset.component';

describe('StepperAssetComponent', () => {
  let component: StepperAssetComponent;
  let fixture: ComponentFixture<StepperAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
