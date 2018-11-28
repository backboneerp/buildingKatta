import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleFunction } from '../../common-clasess/project-title.constant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './asset.view.html',
    styleUrls: ['./asset.style.css']
})
export class AssetComponent {
    public formGroup: FormGroup;

  // PROPERTIES REQUIRED TO DISPLAY VALIDATION EFFECT AND MESSAGE
  public assetNameCss = 'required-fields';
  public assetNameError = '';

  public priceCss = 'required-fields';
  public priceError = '';

  public chargesCss = 'required-fields';
  public chargesError = '';

  public owenerNameCss = 'required-fields';
  public owenerNameError = '';

  public validFromDateCss = 'required-fields';
  public validFromDateError = '';

  public validToDateCss = 'required-fields';
  public validToDateError = '';

  public worrantyCss = 'required-fields';
  public worrantyError = 'required-fields';
  private ERROR_CSS_CLASS = 'required-fields-error';
  private RIGHT_CSS_CLASS = 'required-fields';

    constructor(private fb: FormBuilder, private title: Title) {
        this.title.setTitle('Asset |' + TitleFunction.projectTitle);
        this.createReactiveControls(this.fb);
        this.formGroup.valueChanges.subscribe(observ => {
            this.formControlValidation();
        });

    }
    private isSelectedOwener = false;
    // THIS FUNCTION CREATE REACTIVE FORM CONTROLS
    createReactiveControls(formBuilder: FormBuilder): void {
        this.formGroup = formBuilder.group({
            assetName: ['', Validators.required],
            price: ['', Validators.compose([Validators.required])],
            charges: ['', Validators.compose([Validators.required])],
            owenerName: ['select owener', Validators.compose([Validators.required])],
            validFromDate: ['', Validators.compose([Validators.required])],
            validToDate: ['', Validators.compose([Validators.required])],
            worranty: ['', Validators.compose([Validators.required])],
            assetType: [],
            submitButton: ['SUBMIT']
        });
        this.formGroup.get('submitButton').disable({onlySelf: true});
        this.formGroup.get('owenerName').setValue('none', {onlySelf: true});
        this.formGroup.get('validFromDate').valueChanges.subscribe(value => {
            if (value === null || value === '') {
                this.validFromDateError = 'Please enter valid from date';
                this.validFromDateCss = this.ERROR_CSS_CLASS;
            } else {
                this.validFromDateCss = this.ERROR_CSS_CLASS;
                this.validFromDateError = '';
            }
        });
        this.formGroup.get('owenerName').valueChanges.subscribe(value => {
            if (value === 'none' || value === null || value === '') {
                this.owenerNameCss = this.ERROR_CSS_CLASS;
                this.owenerNameError = 'Please select owener';
                this.isSelectedOwener = false;
            } else {
                this.owenerNameCss = this.RIGHT_CSS_CLASS;
                this.owenerNameError = '';
                this.isSelectedOwener = true;
            }
        });
    }
    private disableSubmitButton(): void {
        this.formGroup.get('submitButton').disable({onlySelf: true});
    }
    private enableSubmitButton(): void {
        this.formGroup.get('submitButton').enable({onlySelf: true});
    }

    // VALIDATION FUNCTION ACTUALLY DO VALIDATION
    private formControlValidation(): void {
        if (this.formGroup.get('assetName').hasError('required')) {
            this.assetNameCss = this.ERROR_CSS_CLASS;
            this.assetNameError = 'Please enter asset name';
        } else {
            this.assetNameCss = this.RIGHT_CSS_CLASS;
            this.assetNameError = '';
        }
        if (this.formGroup.get('price').hasError('required')) {
            this.priceCss = this.ERROR_CSS_CLASS;
            this.priceError = 'Please enter price';
        } else {
            this.priceCss = this.RIGHT_CSS_CLASS;
            this.priceError = '';
        }
        if (this.formGroup.get('charges').hasError('required')) {
            this.chargesCss = this.ERROR_CSS_CLASS;
            this.chargesError = 'Please enter charges';
        } else {
            this.chargesCss = this.RIGHT_CSS_CLASS;
            this.chargesError = '';
        }
        if (this.formGroup.get('owenerName').value === 'none') {
            this.owenerNameCss = this.ERROR_CSS_CLASS;
            this.owenerNameError = 'Please select owener name';

        } else {
            this.owenerNameCss = this.RIGHT_CSS_CLASS;
            this.owenerNameError = '';
        }
        if (this.formGroup.get('validFromDate').hasError('required')) {
            this.validFromDateCss = this.ERROR_CSS_CLASS;
            this.validFromDateError = 'Please select valid from date';

        } else {
            this.validFromDateCss = this.RIGHT_CSS_CLASS;
            this.validFromDateError = '';
        }
        if (this.formGroup.get('validToDate').hasError('required')) {
            this.validToDateCss = this.ERROR_CSS_CLASS;
            this.validToDateError = 'Please enter valid to date';
        } else {
            this.validToDateCss = this.RIGHT_CSS_CLASS;
            this.validToDateError = '';
        }
        if (this.formGroup.get('worranty').hasError('required')) {
            this.worrantyCss = this.ERROR_CSS_CLASS;
            this.worrantyError = 'Please enter worranty';
        } else {
            this.worrantyCss = this.RIGHT_CSS_CLASS;
            this.worrantyError = '';
        }
        if (this.formGroup.invalid || !this.isSelectedOwener) {
            this.formGroup.get('submitButton').disable({onlySelf: true});
        } else {
            this.formGroup.get('submitButton').enable({onlySelf: true});
        }
    }
    // FOR FORM SUBMIT => WHEN FORM IS SUBMITTED THIS FUNCTION WILL CALL
    public post(): void {
        alert(JSON.stringify(this.formGroup.value));

    }
    public goBack(): void {

    }
}
