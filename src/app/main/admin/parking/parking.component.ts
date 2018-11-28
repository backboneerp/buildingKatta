import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './parking.view.html',
    styleUrls: ['./parking.style.css']
})
export class ParkingComponent {
    public formGroup: FormGroup;
    constructor(private title: Title, private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            registrationNumber: ['', Validators.compose([Validators.required])],
            vehicleNumber: ['', Validators.compose([Validators.required])],
            vendorName: ['', Validators.compose([Validators.required])],
            vendorType: ['', Validators.compose([Validators.required])],
            address: ['', Validators.compose([Validators.required])],
            phone: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            charges: ['', Validators.compose([Validators.required])],
            fromDate: ['', Validators.compose([Validators.required])],
            toDate: ['', Validators.compose([Validators.required])],
            submitButton: ['SUBMIT']
        });
        this.formGroup.get('vendorType').setValue('none', {onlySelf: true});
    }
    public post(): void {
        alert(JSON.stringify(this.formGroup.value));
    }

}
