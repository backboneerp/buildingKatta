import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stepper-signin',
  templateUrl: './stepper-signin.component.html',
  styleUrls: ['./stepper-signin.component.css']
})
export class StepperSigninComponent implements OnInit {

  btnClick= function () {
    this.router.navigate(['/home']);
  };

  btnClick2= function () {
    this.router.navigate(['/signup']);
  };

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private _formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    });
  }
}
