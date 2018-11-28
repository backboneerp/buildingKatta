import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {BrowserModule} from "@angular/platform-browser";
import {CommonFooterModule} from "../../../common/common.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StepperSignupComponent } from './stepper-signup/stepper-signup.component';
import {MatRadioModule} from '@angular/material/radio';
import {HttpModule} from "@angular/http";
import {ServerService} from "./stepper-signup/server.service";
import { HttpClientModule } from '@angular/common/http';

// noinspection JSDeprecatedSymbols
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
    FormsModule, ReactiveFormsModule, BrowserModule, HttpModule,HttpClientModule
  ],
  providers: [ServerService],
  declarations: [SignupComponent, StepperSignupComponent]
})
export class SignupModule { }
