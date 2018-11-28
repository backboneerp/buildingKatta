import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ShellComponent } from './shell-component';
import { AdministrationRouting } from './administrator-routing.module';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { RoleComponent } from './role/role.component';
import { FlatComponent } from './flat/flat.component';
import { AdminRoutinModule } from '../asset.-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonFooterModule } from '../../../common/common.module';
import { AdministrationComponent } from './administration.component';
import { RoleManagementComponent } from './role/role-management.component';
import { CommonModule } from '@angular/common';
import { StepperUserComponent } from './user/stepper-user/stepper-user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {
  MatInputModule,
  MatListModule, MatMenuModule,
  MatOptionModule,
  MatProgressBarModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule,
  MatTableModule, MatTooltipModule
} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import { StepperRoleComponent } from './role/stepper-role/stepper-role.component';
import { StepperServiceComponent } from './service/stepper-service/stepper-service.component';
import { StepperFlatComponent } from './flat/stepper-flat/stepper-flat.component';
import {ChartsModule} from "ng2-charts";
@NgModule({
    declarations: [UserComponent,
        ShellComponent,
        ServiceComponent,
        RoleComponent,
        FlatComponent,
      AdministrationComponent,
        RoleManagementComponent,
        StepperUserComponent,
        StepperRoleComponent,
        StepperServiceComponent,
        StepperFlatComponent],
    imports:[
      BrowserModule,
        AdministrationRouting,
        CommonFooterModule,
        AdminRoutinModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatMenuModule,
      MatSelectModule,
      MatSliderModule,
      MatInputModule,
      MatCheckboxModule,
      MatOptionModule,
      MatFormFieldModule,
      MatDialogModule,
      MatTableModule,
      MatStepperModule,
      MatSnackBarModule,
      MatSidenavModule,
      MatProgressBarModule,
      MatListModule,
      MatCheckboxModule,
      MatTooltipModule,
        ReactiveFormsModule,
      CommonModule,
      ChartsModule,
      FormsModule]
})
export class AdministartionModule {

}
