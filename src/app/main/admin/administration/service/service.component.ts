import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleFunction } from '../../../common-clasess/project-title.constant';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from './service.model';
@Component({
    templateUrl: './service.view.html',
    styleUrls: ['../common/style.css']

})
export class ServiceComponent {

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


    public services: Service[] = [];
    public formGroup: FormGroup;
    constructor(private fb: FormBuilder, private title: Title) {
        this.formGroup = this.createFormControls(fb);
        this.title.setTitle('Service | ' + TitleFunction.projectTitle);
        this.initializeService();
    }
    private initializeService(): void {
        let service: Service = new Service();
        service.description = 'This is service 1';
        service.dueDateAndTime = '10-12-2019 10:20 PM';
        service.assignServiceTo = 'Datta';
        service.serviceId = 'SER-401';
        service.serviceName = 'Home Service';
        service.serviceType = 'Domestic';
        service.startDateAndTime = '04-08-2010 2:10 AM';
        service.status = 'OPEN';
        this.services.push(service);
        service = new Service();
        service.description = 'This is service 2';
        service.dueDateAndTime = '12-12-2019 10:20 PM';
        service.assignServiceTo = 'Dipak';
        service.serviceId = 'SER-421';
        service.serviceName = 'Home Service';
        service.serviceType = 'Domestic';
        service.startDateAndTime = '09-08-2010 2:10 AM';
        service.status = 'CLOSE';
        this.services.push(service);
    }
    public createFormControls(fb: FormBuilder): FormGroup {
        return( fb.group({

        }));
    }
}
