import {Component} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import {RouterModule} from '@angular/router';

@Component({
    templateUrl: './signIn.component.html',
    styleUrls: ['./signin.css'],
    selector: 'app-sign-in'
})
export class SigninComponent {
    private forms = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        submitt: new FormControl('SUBMIT', Validators.nullValidator)
    });
    public message: String = '';                              // FORM CONTROL PROPERTIES DECLARATION
    public validcssclass: String = 'default';
    public isValidUserName: any = false;
    public isValidPassword: any = false;
    public username: String = '';
    public usernameError: String = '';
    public passwordError: String = '';
    public password: any = this.forms.get('password');
    public submitControl: any = null;
    public control: any = null;
    public wrongText: String;
    public wrongPassword: String = 'required-fields';

    constructor(private title: Title, private http: HttpClient) {
      this.title.setTitle('Login | Apna Society');
        this.control = this.forms.get('email');
        this.submitControl = this.forms.get('submitt');
        this.submitControl.disable({onlySelf: true});
        this.forms.valueChanges.subscribe(data => {
        this.onChangeValue(data);
        });
    }
    public onChangeValue( data: Object): void {                  // ACTUAL VALIDATION OCCURE HERE
        if (this.control && this.control.hasError('required')) {
            this.usernameError = 'Please enter email-id';
            this.wrongText = 'wrong-text';
            this.validcssclass = 'error';
        } else if (this.control.hasError('email')) {
            this.usernameError = 'Please enter valid email id';
            this.validcssclass = 'error';
            this.wrongText = 'wrong-text';
        } else {
            this.validcssclass = 'right';
            this.usernameError = '';
        }
        if (this.password && (!this.password.valid)) {
                this.passwordError = 'Please enter password';
                this.wrongPassword = 'required-fields-error';
        } else {
            this.passwordError = '';
            this.wrongPassword = 'required-fields';
        }
        if (this.forms.status === 'VALID') {
            this.submitControl.enable({onlySelf: true});
        } else {
            this.submitControl.disable({onlySelf: true});
        }
    }


    // THIS FUNCTION SUBMIT FINAL DATA TO THE SERVER
   public  onSubmit(): void {
        if (this.forms.status === 'VALID') {
            const formData = {
                email: null,
                password: null
            };
            formData.email = this.control.value;
            formData.password = this.password.value;
            const url = 'http://localhost:4200/registration';
            this.http.post(url, formData).subscribe(data => {
                alert(JSON.stringify(data));
            }, error  => {
                alert(JSON.stringify(error));
            });

            // HTTP CALL GOESE HERE.......
            // alert(JSON.stringify(formData));
        }
    }
}


