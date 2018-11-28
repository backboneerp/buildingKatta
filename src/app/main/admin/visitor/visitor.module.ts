import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VisitorDetailsComponent} from "./visitor-detail.component";
import {StepperVisitorComponent} from "./stepper-visitor/stepper-visitor.component";
import {VisitorComponent} from "./visitor.component";
import {
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule, MatSidenavModule,
  MatTableModule, MatTooltipModule
} from "@angular/material";
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonFooterModule} from "../../../common/common.module";
import {RouterModule, Routes} from "@angular/router";
import {HomePageMenu} from "../home/home.component";
import {ChartsModule} from "ng2-charts";

const menuRoute: Routes = [{
  path: 'home',
  component: HomePageMenu
}];
@NgModule({
  imports: [
    RouterModule.forChild(menuRoute),
    CommonModule,
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
    ChartsModule,
    CommonFooterModule, FormsModule, ReactiveFormsModule, BrowserModule
  ],
  declarations: [VisitorDetailsComponent, StepperVisitorComponent, VisitorComponent]
})
export class VisitorModule { }
