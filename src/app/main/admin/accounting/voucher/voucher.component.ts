import { Component, OnInit } from '@angular/core';
import {TitleFunction} from "../../../common-clasess/project-title.constant";
import {Flat} from "../../administration/flat/flat.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
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
    this.title.setTitle('Voucher | ' + TitleFunction.projectTitle);
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


  ngOnInit() {
  }

  public createFormControls(fb: FormBuilder): FormGroup {
    return( fb.group({

    }));
  }
}
