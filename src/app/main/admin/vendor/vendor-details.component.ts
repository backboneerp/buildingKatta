import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Vendor } from './vendor.model';

@Component({
    templateUrl: './vendor-details.view.html',
    styleUrls: ['./vendor-details.style.css']
})
export class VendorDetailsComponent {
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


    public formGroup: FormGroup;
    public vendors: Vendor[] = [];
    constructor(private fb: FormBuilder) {
        this.formGroup = this.createFormController(this.fb);
        this.initializeVendors();
    }
    private initializeVendors(): void {
        let vendor: Vendor = new Vendor();
        vendor.registrationNo = '152014';
        vendor.vendorName = 'Datta';
        vendor.vendorType = 'Paid';
        vendor.address = 'Pune ';
        vendor.charges = 'Rs.5000';
        vendor.email = 'datta@gmail.com';
        vendor.fromDate = '07-05-2018';
        vendor.toDate = '10-10-2019';
        vendor.vehicleNo = 'MH 04 VS 4125';
        vendor.phone = '8625978092';
        vendor.status = 'OPEN';
        this.vendors.push(vendor);



    }
    private createFormController(fb: FormBuilder): FormGroup  {
        return (fb.group({

        }));



    }
}









