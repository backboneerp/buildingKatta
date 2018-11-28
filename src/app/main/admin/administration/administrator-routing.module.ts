import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { _404Component } from '../../../error-log/404-error/404.component';
import { ServiceComponent } from './service/service.component';
import { FlatComponent } from './flat/flat.component';
import { RoleComponent } from './role/role.component';
import { AdministrationComponent } from './administration.component';
import { RoleManagementComponent } from './role/role-management.component';
import { ApplicationRoutes } from '../../../shared/application-route';
const routes: Routes = [
    {
        path: ApplicationRoutes.ADMINISTRATION_MANAGEMENT,
        component: AdministrationComponent,
    },
    {
        path: ApplicationRoutes.USER_MANAGEMET,
        component: UserComponent
    },
    {
        path: ApplicationRoutes.SERVICE_MANAGEMENT,
        component: ServiceComponent
    },
    {
        path: ApplicationRoutes.FLAT_MANAGEMENT,
        component: FlatComponent
    },
    {
        path: 'role',
        component: RoleComponent
    },
    {
        path: ApplicationRoutes.ROLE_MANAGEMENT,
        component: RoleManagementComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRouting {
    constructor() {}
}
