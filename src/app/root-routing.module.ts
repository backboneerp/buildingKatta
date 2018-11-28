import { Route, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginGuard } from './shared/auth-guard.component';
import { ApplicationRoutes } from './shared/application-route';
const appRoute: Routes = [

];
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModules {}
