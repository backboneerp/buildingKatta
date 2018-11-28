import { Component, OnInit } from '@angular/core';
import {Food} from "../../stepper/stepper.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper-asset',
  templateUrl: './stepper-asset.component.html',
  styleUrls: ['./stepper-asset.component.css']
})
export class StepperAssetComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
