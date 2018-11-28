import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AuthenticationModule } from './main/authentication/authentication.module';
import { AppRoutingModules } from './root-routing.module';
import { Test } from './test.component';
import { MenuModule } from './main/admin/home/home.module';

import { Router, Routes, RouterModule } from '@angular/router';
import { Footer } from './common/footer/footer.component';
import { AdminModule } from './main/admin/admin.module';
import { ErrorLog } from './error-log/error-log.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalSecurity } from './security/security.service';
import {MatStepperModule, MatIconModule, MatOptionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

const rut: Routes = [{
  path: 'app/:id',
  component: Footer
},
  { path: '', redirectTo: '/signin', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent, Test
  ],
  imports: [ RouterModule.forRoot(rut),
    BrowserAnimationsModule,
    BrowserModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    AuthenticationModule,
    MenuModule,
    AdminModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
    ErrorLog, HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
