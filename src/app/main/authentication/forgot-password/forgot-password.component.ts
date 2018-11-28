import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StringUtility } from '../../../shared/utility/string-utility.component';
import { ApplicationRoutes } from '../../../shared/application-route';
@Component({
    templateUrl: './forgot-password.view.html',
    styleUrls: ['./forgot-style.css']

})
export class ForgotPassword {
    public loginUrl: string;
    public formGroup: FormGroup;
    constructor(private fb: FormBuilder, private title: Title) {
        this.loginUrl = StringUtility.join('/', ApplicationRoutes.ADMIN_LOGIN);

        this.formGroup = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            submit: ['SUBMIT']
        });
        this.formGroup.valueChanges.subscribe(data => {
            this.validation(data);
        });
        this.formGroup.get('submit').disable({onlySelf: true});
    }
    public requireCss = 'required-fields';
    public errorMessage: string = null;
    private validation(data: Object): void {
        if (this.formGroup.get('email').hasError('required')) {
            this.requireCss = 'required-fields-error';
            this.errorMessage = 'Please enter email id';
        } else if (this.formGroup.get('email').hasError('email')) {
            this.requireCss = 'required-fields-error';
            this.errorMessage = 'Please enter valid email id';
        } else {
            this.requireCss = 'required-fields';
            this.errorMessage = '';
        }
        if (this.formGroup.invalid) {
            this.formGroup.get('submit').disable({onlySelf: true});
        } else {
            this.formGroup.get('submit').enable({onlySelf: true});
        }
    }
    public post() {
        alert(JSON.stringify(this.formGroup.value));
    }
}
