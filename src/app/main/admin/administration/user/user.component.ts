import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleFunction } from '../../../common-clasess/project-title.constant';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './temp.html',
    styleUrls: ['./user.style.scss', '../common/style.css']
})

export class UserComponent {
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
    constructor(private fb: FormBuilder, private title: Title) {
        this.formGroup = this.createFormControls(fb);
        this.title.setTitle('Role | ' + TitleFunction.projectTitle);
    }
    public createFormControls(fb: FormBuilder): FormGroup {
        return( fb.group({

        }));
    }
}
