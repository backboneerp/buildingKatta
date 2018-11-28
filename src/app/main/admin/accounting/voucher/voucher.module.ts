import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherComponent } from './voucher.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {AdminRoutinModule} from "../../asset.-routing.module";
import {
  MatInputModule,
  MatListModule,
  MatMenuModule, MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatTableModule,
  MatTooltipModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {CommonFooterModule} from "../../../../common/common.module";
import {ChartsModule} from "ng2-charts";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AdministrationRouting} from "../../administration/administrator-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserModule} from "@angular/platform-browser";
import { CreateSalesComponent } from './create-sales/create-sales.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonFooterModule,
    AdminRoutinModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
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
    MatTooltipModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [VoucherComponent, CreateSalesComponent]
})
export class VoucherModule { }
