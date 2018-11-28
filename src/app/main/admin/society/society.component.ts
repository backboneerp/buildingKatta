import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl()
  });
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

  constructor() { }

  ngOnInit() {
  }

}
