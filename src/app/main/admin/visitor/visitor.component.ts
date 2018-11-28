import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    templateUrl: './visitor.view.html',
    styleUrls: ['./visitor.style.css']
})
export class VisitorComponent {
    public formGroup: FormGroup;
    constructor(private title: Title, private fb: FormBuilder) {
       this.formGroup = this.createFormControls(this.fb);
       this.setDefaultSelectControlValue();



    }
    private setDefaultSelectControlValue(): void {
        this.getControl('visitingType').setValue('none', {onlySelf: true});
        this.getControl('relationType').setValue('none', {onlySelf: true});
    }
    private getControl(name: string): AbstractControl {
        return this.formGroup.get(name);
    }

    private createFormControls(fb: FormBuilder): FormGroup {
       return (fb.group({
            date: ['', Validators.compose([Validators.required])],
            photo: ['', Validators.compose([Validators.required])],
            visitorName: ['', Validators.compose([Validators.required])],
            visitingType: ['', Validators.compose([Validators.required])],
            flatNo: ['', Validators.compose([Validators.required])],
            owenerName: ['', Validators.compose([Validators.required])],
            relationType: ['', Validators.compose([Validators.required, Validators.email])],
            visitingPurpose: ['', Validators.compose([Validators.required])],
            description: ['', Validators.compose([Validators.required])],
            inDateAndTime: ['', Validators.compose([Validators.required])],
            outDateAndTime: ['', Validators.compose([Validators.required])],
            attachDocument: ['', Validators.compose([Validators.required])],
            submitButton: ['SUBMIT']
        }));
    }


    public post(): void {
        alert(JSON.stringify(this.formGroup.value));
    }
}
