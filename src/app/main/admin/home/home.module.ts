import { NgModule } from '@angular/core';
import { HomePageMenu } from './home.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { MenuRootComponent } from './home.route.component';
import { CommonFooterModule } from 'src/app/common/common.module';
const menuRoute: Routes = [{
    path: 'home',
    component: HomePageMenu

}];
@NgModule({
    imports: [RouterModule.forChild(menuRoute), CommonFooterModule],
    declarations: [MenuRootComponent, HomePageMenu]
})
export class MenuModule {

}
