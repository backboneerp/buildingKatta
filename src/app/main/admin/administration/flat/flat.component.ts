import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleFunction } from '../../../common-clasess/project-title.constant';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Flat } from './flat.model';

@Component({
    templateUrl: './flat.view.html',
    styleUrls: ['./flat.style.scss', '../common/style.css']
})
export class FlatComponent {
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


    public flats: Flat[] = [];
    public formGroup: FormGroup;
    constructor(private fb: FormBuilder, private title: Title) {
        this.formGroup = this.createFormControls(fb);
        this.title.setTitle('FLAT | ' + TitleFunction.projectTitle);
        this.initializeRole();
    }
    private initializeRole(): void {
        let flat: Flat = new Flat();
        flat.coOwener = 'Dattatray sabne';
        flat.faze = 'FAZE 1';
        flat.flatNo = '201';
        flat.flatOwener = 'Dipak Shelar';
        flat.flatRent = 'Rs.2000';
        flat.flatType = '1BHK';
        flat.maintenanceCost = 'Rs.400';
        flat.service = 'Home Service';
        flat.societyName = 'Vlshnupriya';
        flat.whoIsStaying = 'Rani Malhotra';
        flat.status = 'OPEN';
        this.flats.push(flat);

        flat = new Flat();
        flat.coOwener = 'Dipak sabne';
        flat.faze = 'FAZE 2';
        flat.flatNo = '401';
        flat.flatOwener = 'Dattatray sabne';
        flat.flatRent = 'Rs.12000';
        flat.flatType = '2BHK';
        flat.maintenanceCost = 'Rs.400';
        flat.service = 'Home Service';
        flat.societyName = 'Vlshnupriya';
        flat.whoIsStaying = 'Rupam Gupta';
        flat.status = 'CLOSE';
        this.flats.push(flat);


    }

    public createFormControls(fb: FormBuilder): FormGroup {
        return( fb.group({

        }));
    }
}
