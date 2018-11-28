import { Component, OnInit } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup , FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StringUtility } from '../../../shared/utility/string-utility.component';
import { ApplicationRoutes } from '../../../shared/application-route';
@Component({
    templateUrl: './create-account.view.html',
    styleUrls: ['./create-account.style.css']
})
export class CreateAccount implements OnInit {
    public formGroup: FormGroup;
    public societyNameError = '';
    public owenerNameError = '';
    public societyEmailIdError = '';
    public societyMobileNoError = '';
    public houseNameError = '';
    public streetNameError = '';
    public landMarkError = '';
    public countryError = '';
    public stateError = '';
    public cityError = '';
    public emailIdError = '';
    public passwordError = '';
    public confirmPasswordError = '';
    public static zipCodePattern = '^.+[ ]*\\d{5}$';
    public static mobilePattern = '^[7-9][0-9]{9}$';

    public s_b_nameCss = 'required-fields';
    public s_ow_b_nameCss = 'required-fields';
    public s_email_b_Css = 'required-fields';
    public s_mob_b_Css = 'required-fields';
    public s_house_b_nameCss = 'required-fields';
    public s_street_b_Css = 'required-fields';
    public s_land_b_nameCss = 'required-fields';
    public s_country_b_nameCss = 'required-fields';
    public s_state_b_Css = 'required-fields';
    public s_city_b_nameCss = 'required-fields';
    public email_b_Css = 'required-fields';
    public password_b_nameCss = 'required-fields';
    public c_password_b_nameCss = 'required-fields';

    constructor(private route: Router, private fb: FormBuilder, private title: Title) {

    this.title.setTitle('signup | Apna Society');
        this.formGroup = this.fb.group({
            societyName: ['', Validators.compose([Validators.required])],
            owenerName: ['', Validators.compose([Validators.required])],
            societyEmail: ['', Validators.compose([Validators.required, Validators.email])],
            societyMobileNo: ['', Validators.compose([Validators.required, Validators.pattern(CreateAccount.mobilePattern)])],
            societyLandLineNo: ['', Validators.compose([Validators.required])],
            societyIdNo: ['', Validators.compose([Validators.required])],
            houseNo: ['', Validators.compose([Validators.required])],
            streetName: ['', Validators.compose([Validators.required, Validators.pattern(CreateAccount.zipCodePattern)])],
            landmark: ['', Validators.compose([Validators.required])],
            country: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            emailId: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required])],
            confirmPassword: ['', Validators.compose([Validators.required])],
            backButton: ['BACK', Validators.nullValidator],
            resetButton: ['RESET', Validators.nullValidator],
            submitButton: ['SUBMIT', Validators.nullValidator],
            liscense: []
        });
       // this.formGroup.patchValue({country:'select country'});
        this.formGroup.get('submitButton').disable({onlySelf: true});
        this.formGroup.valueChanges.subscribe(data => {
           this.onChangeValidation(data);
       });
    }

    public matchPassword = true;
    private onChangeValidation(data: any): void {

        const societyName = this.formGroup.get('societyName');
        if ( societyName && societyName.hasError('required') ) {
            this.societyNameError = 'Please enter society name';
            this.s_b_nameCss = 'required-fields-error';
        } else {
            this.societyNameError = '';
            this.s_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('owenerName').hasError('required')) {
            this.owenerNameError = 'Please enter society contact person name';
            this.s_ow_b_nameCss = 'required-fields-error';
        } else {
            this.owenerNameError = '';
            this.s_ow_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('societyEmail').hasError('required')) {
            this.societyEmailIdError = 'Please enter society email id';
            this.s_email_b_Css = 'required-fields-error';
        } else if (this.formGroup.get('societyEmail').hasError('email')) {
            this.societyEmailIdError = 'Please enter valid society email id';
            this.s_email_b_Css = 'required-fields-error';
        } else {
            this.societyEmailIdError = '';
            this.s_email_b_Css = 'required-fields';
        }
        if (this.formGroup.get('societyMobileNo').hasError('required')) {
            this.societyMobileNoError = 'Please enter society mobile no';
            this.s_mob_b_Css = 'required-fields-error';
        } else if (this.formGroup.get('societyMobileNo').hasError('pattern')) {
            this.societyMobileNoError = 'Please enter valid mobile no';
            this.s_mob_b_Css = 'required-fields-error';
        } else {
            this.societyMobileNoError = '';
            this.s_mob_b_Css = 'required-fields';
        }
        if (this.formGroup.get('houseNo').hasError('required')) {
            this.houseNameError = 'Please enter house name';
            this.s_house_b_nameCss = 'required-fields-error';
        } else {
            this.houseNameError = '';
            this.s_house_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('streetName').hasError('required')) {

            this.streetNameError = 'Please enter street name';
            this.s_street_b_Css = 'required-fields-error';
        } else if (this.formGroup.get('streetName').hasError('pattern')) {
            this.streetNameError = 'Please enter zip code at the end';
            this.s_street_b_Css = 'required-fields-error';
        } else {
            this.streetNameError = '';
            this.s_street_b_Css = 'required-fields';
        }
        if (this.formGroup.get('country').hasError('required')) {
            this.countryError = 'Please select country';
            this.s_country_b_nameCss = 'required-fields-error';
        } else {
            this.countryError = '';
            this.s_country_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('state').hasError('required')) {
            this.stateError = 'Please select state';
            this.s_state_b_Css = 'required-fields-error';
        } else {
            this.stateError = '';
            this.s_state_b_Css = 'required-fields';
        }
        if (this.formGroup.get('city').hasError('required')) {
            this.cityError = 'Please select city';
            this.s_city_b_nameCss = 'required-fields-error';
        } else {
            this.cityError = '';
            this.s_city_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('emailId').hasError('required')) {
            this.emailIdError = 'Please enter email id';
            this.email_b_Css = 'required-fields-error';
        } else if (this.formGroup.get('emailId').hasError('email')) {
            this.emailIdError = 'Please enter valid email id';
            this.email_b_Css = 'required-fields-error';
        } else {
            this.emailIdError = '';
            this.email_b_Css = 'required-fields';
        }
        if (this.formGroup.get('password').hasError('required')) {
            this.passwordError = 'Please enter  password';
            this.password_b_nameCss = 'required-fields-error';
        } else {
            this.passwordError = '';
            this.password_b_nameCss = 'required-fields';
        }

        if (this.formGroup.get('confirmPassword').hasError('required')) {
            this.confirmPasswordError = 'Please enter confirm password';
            this.c_password_b_nameCss = 'required-fields-error';
        } else {
            this.confirmPasswordError = '';
            this.c_password_b_nameCss = 'required-fields';
        }
        if (this.formGroup.get('landmark').hasError('required')) {
            this.landMarkError = 'Please enter landmark';
            this.s_land_b_nameCss = 'required-fields-error';

        } else {
            this.landMarkError = '';
            this.s_land_b_nameCss = 'required-fields';
        }

        if (this.formGroup.get('password').value != this.formGroup.get('confirmPassword').value) {
            this.confirmPasswordError = 'Password and  confirm password does not match';
            this.c_password_b_nameCss = 'required-fields-error';
            this.matchPassword = true;

        } else {

            if (this.matchPassword) {
                this.confirmPasswordError = 'Password is matched';
                this.c_password_b_nameCss = 'required-fields';
                const x = setTimeout(() => {
                    this.confirmPasswordError = '';
                }, 1000);
                this.matchPassword = false;
            }


    }
    if (this.formGroup.invalid) {
        this.formGroup.get('submitButton').disable({onlySelf: true});
    } else {
    this.formGroup.get('submitButton').enable({onlySelf: true});
   }

    }
    private getDropdownData(): any[] {
        const dropdown = [
            {
                country: 'India', states: [

                    {state: 'Maharashta', cities: [

                        {city: 'Mumbai -(022)', value: 'Mumbai'},
                        {city: 'Pune', value: 'Pune'},
                        {city: 'Nasik', value: 'Nasik'},
                        {city: 'Aurangabad', value: 'Aurangabad'},
                        {city: 'Nagpur', value: 'Nagpur'},
                    ], value: 'maharashtra'},
                    {state: 'Andhrapradesh', cities: [
                        {city: 'Hyderabad', value: 'Hyderabad'},
                        {city: 'Seconderabad', value: 'Seconderabad'},
                        {city: 'Nampally', value: 'Nampally'},
                        {city: 'Lingampally', value: 'Lingampally'},

                    ], value: 'Andhrapradesh'},
                    {state: 'Karnataka', cities: [], value: 'Karnataka'},
                    {state: 'Tamilnadu', cities: [], value: 'Tamilnadu'},
                    {state: 'Goa', cities: [], value: 'Goa'}
                ], value: 'india'
            },
            {
                country: 'America', states: [
                    {state: 'Los Angelise', cities: [
                        {city: 'washington', value: 'washington'}
                    ], value: 'los angelise'}
                ], value: 'india'
            }

        ];
        return dropdown;
    }
    public goBackToLogin(): void {
        const loginUrl = StringUtility.join('/', ApplicationRoutes.ADMIN_LOGIN);
        this.route.navigate([loginUrl]);
    }
    public resetForm(): void {
      //  this.formGroup.get("country").value("0");
        this.formGroup.reset({backButton: 'BACK', resetButton: 'RESET', submitButton: 'SUBMIT'});

    }
    public states: any[];
    public cities: any[];
    public ngOnInit(): void {
     this.formGroup.get('country').valueChanges.subscribe(value => {
                    if (value != null) {
                        this.states = this.getDropdownData()[value].states;
                        this.cities = [];
                    }



        });
        this.formGroup.get('state').valueChanges.subscribe(value => {

                    if (value != null) {
                        const countryIndex = this.formGroup.get('country').value;
                        const stateIndex = this.formGroup.get('state').value;
                        this.cities = this.getDropdownData()[countryIndex].states[stateIndex].cities;
                    }






        });
    }
    public post(): void {
        alert(this.formGroup.get('country').value);

    }


}
