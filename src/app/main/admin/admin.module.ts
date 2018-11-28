import { NgModule } from '@angular/core';
import { AdministartionModule } from './administration/administration.module';
import { AdministrationRouting } from './administration/administrator-routing.module';
import { AssetComponent } from './asset/asset.component';
import { AdminRoutinModule } from './asset.-routing.module';
import { CommonFooterModule } from '../../common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor/vendor.component';
import { VisitorComponent } from './visitor/visitor.component';
import { ParkingComponent } from './parking/parking.component';
import { AssetDetailsComponent } from './asset/asset-details.component';
import { ParkingDetailsComponent } from './parking/parking-details.component';
import { VendorDetailsComponent } from './vendor/vendor-details.component';
import { VisitorDetailsComponent } from './visitor/visitor-detail.component';
import { AssetHttpService } from './asset/asset-login.service';
import { ConfigurationComponent } from './configuration/configuration.component';
import {ConfigurationDetailsComponent} from './configuration/configuration-details.component';
import { SocietyComponent } from './society/society.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule, MatSidenavModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { StepperConfigComponent } from './configuration/stepper-config/stepper-config.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from "@angular/material/slider";
import {MatStepperModule} from '@angular/material/stepper';

import { StepperAssetComponent } from './asset/stepper-asset/stepper-asset.component';
import { TableConfigComponent } from './configuration/table-config/table-config.component';


import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { StepperVisitorComponent } from './visitor/stepper-visitor/stepper-visitor.component';
import { StepperParkingComponent } from './parking/stepper-parking/stepper-parking.component';
import {ReportsComponent} from "./reports/reports.component";
import {StepperReportsComponent} from "./reports/stepper-reports/stepper-reports.component";
import {ConfigurationModule} from "./configuration/configuration.module";
import {AssetModule} from "./asset/asset.module";
import {VendorModule} from "./vendor/vendor.module";
import {ParkingModule} from "./parking/parking.module";
import {ReportsModule} from "./reports/reports.module";
import {VisitorModule} from "./visitor/visitor.module";
import {SocietyModule} from "./society/society.module";
import {RouterModule} from "@angular/router";
import {SigninModule} from "./signin/signin.module";
import {SignupModule} from "./signup/signup.module";
import {AccountingModule} from "./accounting/accounting.module";
import { AccountingComponent } from "./accounting/accounting.component"
@NgModule({
  imports: [
    BrowserAnimationsModule,
    AdminRoutinModule,
    AdministartionModule,
    RouterModule,
    AssetModule,
    VendorModule,
    ConfigurationModule,
    ParkingModule,
    ReportsModule,
    VisitorModule,
    SocietyModule,
    AccountingModule,
    // MatButtonModule,
    // MatIconModule,
    // MatSelectModule,
    // MatMenuModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatInputModule,
    // MatCheckboxModule,
    // MatOptionModule,
    // MatFormFieldModule,
    // MatDialogModule,
    // MatTableModule,
    // MatStepperModule,
    // MatSnackBarModule,
    // MatSidenavModule,
    // MatProgressBarModule,
    // MatListModule,
    // MatCheckboxModule,
    // MatTooltipModule,
    SigninModule,
    SignupModule,
    CommonFooterModule, FormsModule, ReactiveFormsModule, ConfigurationModule, BrowserModule, CommonModule],

  declarations: [
    // AssetComponent,
    // VendorComponent,
    // VisitorComponent ,
    // ParkingComponent,
    // SocietyComponent,
    // ReportsComponent,
    // AssetDetailsComponent,
    // ParkingDetailsComponent,
    // VendorDetailsComponent,
    // VisitorDetailsComponent,
    // StepperComponent,
    // StepperAssetComponent,
    // StepperVendorComponent,
    // StepperReportsComponent,
    // StepperParkingComponent,
    // StepperVisitorComponent

  ],
  providers: [AssetHttpService]
})
export class AdminModule {
  constructor() {}
}

