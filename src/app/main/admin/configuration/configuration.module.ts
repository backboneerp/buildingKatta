import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationDetailsComponent } from './configuration-details.component';

import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from '@angular/material/input';
import {
  MatOptionModule,
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatTableDataSource,
  MatToolbarModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {StepperComponent} from "../stepper/stepper.component";
import {MatSliderModule} from '@angular/material/slider';
import { StepperConfigComponent } from './stepper-config/stepper-config.component';
import { TableConfigComponent } from './table-config/table-config.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {ConfigurationComponent} from "./configuration.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule,
    CommonFooterModule, FormsModule, ReactiveFormsModule, BrowserModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSliderModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  declarations: [ConfigurationDetailsComponent, ConfigurationComponent, StepperConfigComponent, TableConfigComponent]
})
export class ConfigurationModule { }
