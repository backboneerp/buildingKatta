 import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Visitor } from './visitor-model.component';

@Component({
    templateUrl: './visitor-details.view.html',
    styleUrls: ['./visitor-details.style.css']
})
export class VisitorDetailsComponent {
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
    public visitors: Visitor[] = [];
    public formGroup: FormGroup;
    constructor(private fb: FormBuilder) {
        this.formGroup = this.createFormController(this.fb);
        this.initializeVisitors();
    }
    private createFormController(fb: FormBuilder): FormGroup  {
        return (fb.group({
        }));
    }
    private initializeVisitors() {
        let visitor: Visitor = new Visitor();
        visitor.date = '27-07-2018';
        visitor.flatNo = 'A-201';
        visitor.inDateAndTime = '27-07-2018 10:38 AM';
        visitor.outDateAndTime = '27-07-2018 12:00 AM';
        visitor.owenerName = 'Datta';
        visitor.relationType = 'Nefew';
        visitor.status = 'OPEN';
        visitor.visitorName = 'Rahul';
        this.visitors.push(visitor);

        visitor = new Visitor();
        visitor.date = '12-07-2018';
        visitor.flatNo = 'A-401';
        visitor.inDateAndTime = '12-07-2018 08:38 AM';
        visitor.outDateAndTime = '15-07-2018 08:00 PM';
        visitor.owenerName = 'Dipak';
        visitor.relationType = 'Brother';
        visitor.status = 'CLOSE';
        visitor.visitorName = 'Rani';
        this.visitors.push(visitor);

        visitor = new Visitor();
        visitor.date = '20-07-2018';
        visitor.flatNo = 'A-100';
        visitor.inDateAndTime = '20-07-2018 10:38 AM';
        visitor.outDateAndTime = '20-07-2018 03:00 PM';
        visitor.owenerName = 'Datta';
        visitor.relationType = 'Friends';
        visitor.status = 'OPEN';
        visitor.visitorName = 'Salman khan';
        this.visitors.push(visitor);

    }
}
