import { Routes, RouterModule } from '@angular/router';
/*
import { SigninComponent } from './signin/signin.component';
*/
import { NgModule } from '@angular/core';
import { ForgotPassword } from './forgot-password/forgot-password.component';
import { CreateAccount } from './signup/create-account.component';
import { Signin2Component } from './signin/signin2.component';
import { ResetPassword } from './reset-password/reset-password.component';
import { LoginGuard } from '../../shared/auth-guard.component';
import { ApplicationRoutes } from '../../shared/application-route';
import { AuthenticationModule } from './authentication.module';
import {SigninComponent} from './signin/signin.component';
import {SocietyComponent} from "../admin/society/society.component";

const authRoute: Routes = [
    {
        path: ApplicationRoutes.ADMIN_LOGIN,
        component: SigninComponent
    },
    {
        path: ApplicationRoutes.FORGOT_PASSWORD,
        component: ForgotPassword

    },
    {
        path: ApplicationRoutes.CREATE_ACCOUNT,
        component: CreateAccount
    },
  {

  path: 'create',
  component: CreateAccount
},
    {
        path: 'signin2',
        component: Signin2Component
    },
    {
        path: ApplicationRoutes.RESET_PASSWORD,
        component: ResetPassword
    } ,
    {
        path: '',
        redirectTo: ApplicationRoutes.REDIRECT_TO_ADMIN_LOGIN,
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(authRoute),
      AuthenticationModule
    ],
    exports: [RouterModule, AuthenticationModule]
})
export class AuthRoot {}
