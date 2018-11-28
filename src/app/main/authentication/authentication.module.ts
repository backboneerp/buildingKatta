import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AuthRoot } from './auth-root.module';
import { RootComponent } from './root.component';
import { CommonFooterModule } from 'src/app/common/common.module';
import { ForgotPassword } from './forgot-password/forgot-password.component';
import { CreateAccount } from './signup/create-account.component';
import { Signin2Component } from './signin/signin2.component';
import { ResetPassword } from './reset-password/reset-password.component';
import { Route, Routes, RouterModule } from '@angular/router';

@NgModule({
    imports:
       [BrowserModule,
        CommonFooterModule,
        ReactiveFormsModule,
         RouterModule
   ],
    declarations: [SigninComponent, RootComponent , ForgotPassword , CreateAccount , Signin2Component , ResetPassword],
    exports: [SigninComponent]
})
export class AuthenticationModule {}
