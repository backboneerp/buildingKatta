import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoleManagementComponent} from "../administration/role/role-management.component";
import {ApplicationRoutes} from "../../../shared/application-route";
import {FlatComponent} from "../administration/flat/flat.component";
import {RoleComponent} from "../administration/role/role.component";
import {ServiceComponent} from "../administration/service/service.component";
import {UserComponent} from "../administration/user/user.component";
import {AdministrationComponent} from "../administration/administration.component";
import {RouterModule, Routes} from "@angular/router";
import {AccountingComponent} from "./accounting.component";
import {RecieptComponent} from "./receipt/reciept.component";
import {VoucherComponent} from "./voucher/voucher.component";
import {CreateSalesComponent} from "./voucher/create-sales/create-sales.component";
import {CreateReceiptComponent} from "./receipt/create-receipt/create-receipt.component";
const routes: Routes = [
  {
    path: ApplicationRoutes.ACCOUNTING_MANAGEMENT,
    component: AccountingComponent,
  },
  {
    path: ApplicationRoutes.RECEIPT,
    component: RecieptComponent
  },
  {
    path: 'voucher',
    component: VoucherComponent
  },
  {
    path: ApplicationRoutes.VOUCHER,
    component: VoucherComponent
  },
  {
    path: ApplicationRoutes.CREATE_SALES,
    component: CreateSalesComponent
  },
  {
  path: ApplicationRoutes.CREATE_RECEIPT,
  component: CreateReceiptComponent
}

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]


})
export class AccountingRoutingModule { }
