import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from './role.model';

@Component({
    templateUrl: './role-management.view.html',
    styleUrls: ['./role-management.style.css', '../common/style.css']
})
export class RoleManagementComponent {
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
    public roles: Role[] = [];
    constructor(private fb: FormBuilder) {
        this.formGroup = this.createFormControls(fb);
        this.initializeRoles();
    }
    private initializeRoles() {
        let role: Role = new Role();
        role.description = 'This is a Role';
        role.role = 'Manager';
        role.roleType = 'Secretary';
        role.status = 'OPEN';
        this.roles.push(role);

        role = new Role();
        role.description = 'This is a Role2';
        role.role = 'Assi Manager';
        role.roleType = 'Member';
        role.status = 'CLOSE';
        this.roles.push(role);

    }
    public createFormControls(fb: FormBuilder): FormGroup {
        return( fb.group({

        }));
    }
}
