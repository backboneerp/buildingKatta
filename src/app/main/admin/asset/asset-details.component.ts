import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Asset } from './asset.model';
import { AssetHttpService } from './asset-login.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalSecurity } from '../../../security/security.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AssetServerUrl } from './asset.server.url';
import { RequestOptions} from '@angular/http';
@Component({
    templateUrl: './asset-detail.view.html',
    styleUrls: ['./asset-details.style.css']
})
export class AssetDetailsComponent implements OnInit {
  public chartColors: any[] = [
    {
      backgroundColor:["lightgreen", "yellow"]
    }];
  // Pie
  public pieChartLabels:string[] = ['Open', 'Close'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


    public addAssetFormGroup: FormGroup;
    public EDIT_ASSET_FORMGROUP: FormGroup;
    public DELETE_ASSET_FORMGROUP: FormGroup;
    private  BLANK: String = '';
    public assets: Asset[] = [];
    eassetName: AbstractControl = null;
    efromDate: AbstractControl = null;
    etoDate: AbstractControl = null;
    eworranty: AbstractControl = null;
    eprice: AbstractControl = null;
    echarges: AbstractControl = null;
    easset: AbstractControl = null;
    eassetOwener: AbstractControl = null;
    esearch: AbstractControl = null;
    esubmit: AbstractControl = null;
    dassetName: AbstractControl = null;
    dsearch: AbstractControl = null;
    asubmit: AbstractControl = null;
    constructor(
            private ser: HttpClient,
            private security: GlobalSecurity,
            private sanitize: DomSanitizer,
            private fb: FormBuilder,
            private http: AssetHttpService
        ) {
            // create reactive form control by invoking this method
        this.addAssetFormGroup = this.createFormController(this.fb);
        this.EDIT_ASSET_FORMGROUP = this.createEditAssetControls(this.fb);
        this.DELETE_ASSET_FORMGROUP = this.createDeleteAssetControls(this.fb);
            // create instance variable for reactive form control
        this.eassetName = this.EDIT_ASSET_FORMGROUP.controls['eassetName'];
        this.efromDate = this.EDIT_ASSET_FORMGROUP.controls['efromDate'];
        this.etoDate = this.EDIT_ASSET_FORMGROUP.controls['etoDate'];
        this.eworranty = this.EDIT_ASSET_FORMGROUP.controls['eworranty'];
        this.eprice = this.EDIT_ASSET_FORMGROUP.controls['eprice'];
        this.echarges = this.EDIT_ASSET_FORMGROUP.controls['echarges'];
        this.easset = this.EDIT_ASSET_FORMGROUP.controls['easset'];
        this.eassetOwener = this.EDIT_ASSET_FORMGROUP.controls['eassetOwener'];
        this.esearch = this.EDIT_ASSET_FORMGROUP.controls['esearch'];
        this.esubmit = this.EDIT_ASSET_FORMGROUP.controls['esubmit'];
        // initialize starting data by calling this methods
        this.dassetName = this.DELETE_ASSET_FORMGROUP.controls['dassetName'];
        this.dsearch = this.DELETE_ASSET_FORMGROUP.controls['dsearch'];
        this.asubmit = this.addAssetFormGroup.controls['submit'];

        this.initializeAsset();
        this.initializeAssetOwener();
        this.addAssetValidation();
        this.createFormSubmitEvent();
        this.editAssetSetDefault();
        this.editValidateAsset();
        // set default control values
        this.setDeleteDefaults();

    }
    ngOnInit() {
        // default form control state

    }
    private createFormSubmitEvent(): void {
        this.addAssetFormGroup.valueChanges.subscribe(data => {
            this.formValidate();
        });
        this.EDIT_ASSET_FORMGROUP.valueChanges.subscribe(data => {
            if (this.EDIT_ASSET_FORMGROUP.valid
                && this.eassetOwener.value != '0'
                && this.easset.value != null ) {
                    this.enableSubmit(this.esubmit);
                } else {
                    this.disableSubmit(this.esubmit);
                }
        });
        this.DELETE_ASSET_FORMGROUP.valueChanges.subscribe(data => {
            if (this.dassetName.value != null
                && this.dassetName.value.trim() !== ''
                && this.dassetName.value !== '0'
                && this.dassetName.dirty) {
                    this.dassetNameError = '';
                    this.enableSubmit(this.dsearch);
                } else {
                    this.disableSubmit(this.dsearch);
                    this.dassetNameError = 'Please select asset';
                }
        });
    }

    public dassetNameError = '';
   public oweners: any[] = [];
   private initializeAssetOwener(): void {
       this.oweners[0] = {value: 'none', text: 'select owener'};
       this.oweners[1] = {value: 'Dattaray sabne', text: 'Dattatray'};
       this.oweners[2] = {value: 'dipak shelar', text: 'Dipak'};
       this.oweners[3] = {value: 'nisha', text: 'nisha'};
   }
    private formValidate(): void {
        const submit = this.addAssetFormGroup.controls['submit'];
        if (this.addAssetFormGroup.valid && this.addAssetFormGroup.controls['assetOwener'].value.trim() != 'none') {
            this.enableSubmit(submit);
        } else if (this.addAssetFormGroup.invalid) {
            this.disableSubmit(submit);
        }
    }
    private enableSubmit(control: AbstractControl): void {
        control.enable({onlySelf: true});
    }
    private disableSubmit(control: AbstractControl): void {
        control.disable({onlySelf: true});
    }
    private initializeAsset(): void {
        let asset: Asset = new Asset();
        asset.assetName = 'Furniture';
        asset.assetOwener = 'Datta';
        asset.assetType = 'No Movable';
        asset.charges = 'Rs.2000';
        asset.fromDate = '12-10-2018';
        asset.toDate = '15-30-2019';
        asset.worranty = '2 years';
        asset.price = '45000';
        asset.status = 'CLOSE';

        this.assets.push(asset);
        asset = new Asset();
        asset.assetName = 'Chair';
        asset.assetOwener = 'Dipak';
        asset.assetType = 'Movable';
        asset.charges = 'Rs.100';
        asset.fromDate = '05-10-2017';
        asset.toDate = '18-01-2019';
        asset.worranty = '10 years';
        asset.price = '500';
        asset.status = 'OPEN';

        this.assets.push(asset);

        asset = new Asset();
        asset.assetName = 'Sofaset';
        asset.assetOwener = 'Pandit';
        asset.assetType = 'No Movable';
        asset.charges = 'Rs.300';
        asset.fromDate = '16-10-2017';
        asset.toDate = '18-01-2019';
        asset.worranty = '7 years';
        asset.price = '10500';
        asset.status = 'CLOSE';
        this.assets.push(asset);
    }
    public assetNameError: string;
    public assetOwenerError: string;
    public assetTYpeError: string;
    public priceError: string;
    private addAssetValidation(): void {
        const assetName: AbstractControl = this.addAssetFormGroup.controls['assetName'];
        const assetOwener: AbstractControl = this.addAssetFormGroup.controls['assetOwener'];
        const fromDate: AbstractControl = this.addAssetFormGroup.controls['fromDate'];
        const toDate: AbstractControl = this.addAssetFormGroup.controls['toDate'];
        const worranty: AbstractControl = this.addAssetFormGroup.controls['worranty'];
        const assetType: AbstractControl = this.addAssetFormGroup.controls['assetType'];
        const charges: AbstractControl = this.addAssetFormGroup.controls['charges'];
        const price: AbstractControl = this.addAssetFormGroup.controls['price'];
        assetName.valueChanges.subscribe(value => {
           if (((assetName.dirty && (assetName.invalid || value.trim() == '')))) {
                this.assetNameError = 'Please enter asset name';
            } else {
                this.assetNameError = '';
            }
        });
       assetOwener.valueChanges.subscribe(value => {
           if (assetOwener.dirty && value.trim() === 'none') {
               this.assetOwenerError = 'Please select asset owener';
           } else {
               this.assetOwenerError = '';
           }
       });
        fromDate.valueChanges.subscribe(value => {
            if (fromDate.dirty && (fromDate.invalid || value.trim() == '')) {
                this.validFromDateError = 'Please select from Date';
            } else {
                this.validFromDateError = '';
            }
        });
        toDate.valueChanges.subscribe(value => {
            if (toDate.dirty && (toDate.invalid || value.trim() == '')) {
                this.validToDateError = 'Please select to Date';
            } else {
                this.validToDateError = '';
            }
        });
        worranty.valueChanges.subscribe(value => {
                if (worranty.dirty && (worranty.invalid || value.trim() == '')) {
                    this.worrantyError = 'Please enter worranty';
                } else {
                    this.worrantyError = '';
                }
        });
        assetType.valueChanges.subscribe(value => {
            if (assetType.dirty && (assetType.invalid || value.trim()) ) {
                this.assetTYpeError = 'Please select asset type';
            } else {
                this.assetTYpeError = '';
            }
        });
        price.valueChanges.subscribe(value => {
            if (price.dirty && (price.invalid || value.trim() == '')) {
                this.priceError = 'Please enter price';
            } else {
                this.priceError = '';
            }
        });
        charges.valueChanges.subscribe(value => {
          if (charges.dirty && (charges.invalid || value.trim() == '')) {
                this.chargesError = 'Please enter charges';
          } else {
            this.chargesError = '';
          }
        });
    }
    private createFormController(fb: FormBuilder): FormGroup  {
        return (fb.group({
            assetName: new FormControl( '', Validators.compose([Validators.required])),
            assetOwener: new FormControl('', Validators.compose([Validators.required])),
            fromDate: new FormControl('', Validators.compose([Validators.required])),
            toDate: new FormControl('', Validators.compose([Validators.required])),
            worranty: new FormControl('', Validators.compose([Validators.required])),
            assetType: new FormControl('Movable', Validators.compose([Validators.required])),
            price: new FormControl('', Validators.compose([Validators.required])),
            charges: new FormControl('', Validators.compose([Validators.required])),
            submit: new FormControl('SUBMIT', Validators.nullValidator)
        }));
    }
    private createEditAssetControls(fb: FormBuilder): FormGroup {
        return (fb.group({
            easset: new FormControl('', Validators.compose([Validators.required])),
            eassetName: new FormControl( '', Validators.compose([Validators.required])),
            eassetOwener: new FormControl('0', Validators.compose([Validators.required])),
            efromDate: new FormControl('', Validators.compose([Validators.required])),
            etoDate: new FormControl('', Validators.compose([Validators.required])),
            eworranty: new FormControl('', Validators.compose([Validators.required])),
            eassetType: new FormControl('Movable', Validators.compose([Validators.required])),
            eprice: new FormControl('', Validators.compose([Validators.required])),
            echarges: new FormControl('', Validators.compose([Validators.required])),
            esubmit: new FormControl('SUBMIT', Validators.nullValidator),
            esearch: new FormControl('SEARCH', Validators.nullValidator)
        }));
    }
    private NONE = 'none';
    private editAssetSetDefault(): void {
        this.EDIT_ASSET_FORMGROUP.controls['eassetName'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['efromDate'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['etoDate'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['eworranty'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['eprice'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['echarges'].setValue(this.BLANK);
        this.EDIT_ASSET_FORMGROUP.controls['easset'].setValue('0', {onlySelf: true});
        this.EDIT_ASSET_FORMGROUP.controls['eassetOwener'].setValue('0', {onlySelf: true});
        this.EDIT_ASSET_FORMGROUP.controls['esearch'].setValue('Search');
        this.EDIT_ASSET_FORMGROUP.controls['esearch'].disable();
    }
    public eassetNameError: string;
    public efromDateError: string;
    public etoDateError: string;
    public eworrantyError: string;
    public epriceError: string;
    public echargesError: string;
    public eassetError: string;
    public eassetOwenerError: string;
    public easearchError: string;
    private editValidateAsset(): void {

        this.eassetName.valueChanges.subscribe(value => {
            const error = this.eassetName.dirty && (this.eassetName.invalid || value.trim() == '');
            this.eassetNameError = this.message(error, 'Please enter asset name');
        });
        this.efromDate.valueChanges.subscribe(value => {
            const error = this.efromDate.dirty && (this.efromDate.invalid || value.trim() == '');
            this.efromDateError = this.message(error, 'Please enter from date');
        });
        this.etoDate.valueChanges.subscribe(value => {
            const error = this.etoDate.dirty && (this.etoDate.invalid || value.trim() == '');
            this.etoDateError = this.message(error, 'Please enter to date');
        });
        this.eworranty.valueChanges.subscribe(value => {
            const error = this.eworranty.dirty && (this.eworranty.invalid || value.trim() == '');
            this.eworrantyError = this.message(error, 'Please enter worranty');
        });
        this.eprice.valueChanges.subscribe(value => {
            const error = this.eprice.dirty && (this.eprice.invalid || value.trim() == '');
            this.epriceError = this.message(error, 'Please enter price');
        });
        this.echarges.valueChanges.subscribe(value => {
            const error = this.echarges.dirty && (this.echarges.invalid || value.trim() == '');
            this.echargesError = this.message(error, 'Please enter charges');
        });
        this.easset.valueChanges.subscribe(value => {
            const error = this.easset.dirty && value.trim() == '0';
            this.eassetError = this.message(error, 'Please select asset');
        });
        this.eassetOwener.valueChanges.subscribe(value => {
            const error = this.eassetOwener.dirty && value.trim() == '0';
            this.eassetOwenerError = this.message(error, 'Please select asset owener');
        });
    }
    private message(error: boolean, message: string): string {
        if (error) {
            return message;
        }
        return '' ;
    }
    private createDeleteAssetControls(fb: FormBuilder): FormGroup {
        return (fb.group({
            dassetName: new FormControl( '0', Validators.compose([Validators.required])),
            dassetOwener: new FormControl('', Validators.compose([Validators.required])),
            dfromDate: new FormControl('', Validators.compose([Validators.required])),
            dtoDate: new FormControl('', Validators.compose([Validators.required])),
            dworranty: new FormControl('', Validators.compose([Validators.required])),
            dassetType: new FormControl('Movable', Validators.compose([Validators.required])),
            dprice: new FormControl('', Validators.compose([Validators.required])),
            dcharges: new FormControl('', Validators.compose([Validators.required])),
            dsearch: new FormControl('search', Validators.nullValidator)
        }));
    }
    // private post(): void {
    //     let asset: Asset = asset = new Asset();
    //     asset.assetName = this.addAssetFormGroup.value.assetName;
    //     asset.assetOwener = (this.addAssetFormGroup.value.assetOwener);
    //     asset.charges = (this.addAssetFormGroup.value.charges);
    //     asset.fromDate = (this.addAssetFormGroup.value.fromDate);
    //     asset.toDate = (this.addAssetFormGroup.value.toDate);
    //     asset.worranty = (this.addAssetFormGroup.value.worranty);
    //     asset.price = (this.addAssetFormGroup.value.price);
    //     asset.assetType = (this.addAssetFormGroup.value.assetType);
    //     alert(JSON.stringify(asset));
    //     this.http.addAsset(asset).subscribe(
    //         (event) => {
    //            if (event.type === (HttpEventType.UploadProgress)) {
    //                 console.log(Math.round(event.loaded / event.total * 100) + '%');
    //             } else if (event.type === HttpEventType.Response) {
    //                 if (event.ok == true) {
    //                     this.setDefaults();
    //                 }
    //                 console.log(event);
    //             }
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    //     //alert(JSON.stringify(asset));
    // }
    public editAssetPost(): void {
        if (this.addAssetFormGroup.valid) {
            alert('Form Edit SuccessFully');
            this.enableSubmit(this.esubmit);
        } else {
            this.disableSubmit(this.esubmit);
        }
    }
    public deleteAssetPost(): void {

    }
    public chargesError: string;
    public validToDateError: string;
    public validFromDateError: string;
    public worrantyError: string;
    private setDefaults(): void {
        this.addAssetFormGroup.controls['assetName'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['assetOwener'].setValue('none', {onlySelf: true});
        this.addAssetFormGroup.controls['charges'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['fromDate'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['toDate'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['worranty'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['price'].setValue(this.BLANK);
        this.addAssetFormGroup.controls['assetType'].setValue('Movable', {onlySelf: true});
        this.assetNameError = '';
        this.priceError = '';
        this.chargesError = '';
        this.validToDateError = '';
        this.validFromDateError = '';
        this.worrantyError = '';
    }
    private setDeleteDefaults(): void {
        this.dassetName.setValue('0', {onlySelf: true});
        this.disableSubmit(this.dsearch);
    }
}

