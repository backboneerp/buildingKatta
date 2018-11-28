import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Parking } from './parking-model.component';
@Component({
    templateUrl: './parking-details.view.html',
    styleUrls: ['./parking-details.style.css']
})
export class ParkingDetailsComponent {
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
    public parkings: Parking[] = [];
    constructor(private fb: FormBuilder) {
        this.formGroup = this.createFormController(this.fb);
        this.initializeParking();
    }
    private initializeParking() {
        let parking: Parking = new Parking();
        parking.buildingName = 'Lokhandwal';
        parking.member = 'Datta';
        parking.vehicleName = 'Karisma';
        parking.vehicleNo = 'MH 04 S 4575';
        parking.modelNO = 'MD-5412';
        parking.vehicleType = 'Two Wheeler';
        parking.parkingNo = 'C15 / 3rd row';
        parking.status = 'OPEN';
        this.parkings.push(parking);

        parking = new Parking();
        parking.buildingName = 'Maheshmati';
        parking.member = 'Dipak';
        parking.vehicleName = 'Maruti Suzuki';
        parking.vehicleNo = 'MH 04 J 3525';
        parking.modelNO = 'MS-9785';
        parking.vehicleType = 'Four Wheeler';
        parking.parkingNo = 'C16 / 4th row';
        parking.status = 'CLOSE';
        this.parkings.push(parking);


    }
    private createFormController(fb: FormBuilder): FormGroup  {
        return (fb.group({

        }));

    }
}
