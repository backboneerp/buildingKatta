import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule, MatSidenavModule,
  MatTableModule, MatTooltipModule
} from "@angular/material";
import {CommonFooterModule} from "../../../common/common.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StepperSigninComponent } from './stepper-signin/stepper-signin.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
    MatCardModule,
    CommonFooterModule,
    MatRadioModule,
    FormsModule, ReactiveFormsModule, BrowserModule
  ],
  declarations: [SigninComponent, StepperSigninComponent]
})
export class SigninModule { }
