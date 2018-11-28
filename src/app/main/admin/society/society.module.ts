import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocietyComponent } from './society.component';

import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {StepperComponent} from "../stepper/stepper.component";
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonFooterModule} from "../../../common/common.module";
import {HomePageMenu} from "../home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ChartsModule} from "ng2-charts";

const menuRoute: Routes = [{
  path: 'home',
  component: HomePageMenu
}];
@NgModule({
  imports: [
    RouterModule.forChild(menuRoute),
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    ChartsModule,
    CommonFooterModule, FormsModule, ReactiveFormsModule, BrowserModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    CommonFooterModule, FormsModule, ReactiveFormsModule, BrowserModule,
    StepperComponent
  ],
  declarations: [SocietyComponent, StepperComponent]
})
export class SocietyModule { }
