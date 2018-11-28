import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingComponent } from './accounting.component';
import {VoucherComponent} from "./voucher/voucher.component";
import {RecieptComponent} from "./receipt/reciept.component";
import {CommonFooterModule} from "../../../common/common.module";
import {AdministrationRouting} from "../administration/administrator-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AccountingRoutingModule} from "./accounting-routing.module";
import {AdminRoutinModule} from "../asset.-routing.module";
import {ChartsModule} from "ng2-charts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VoucherModule} from "./voucher/voucher.module";
import {RecieptModule} from "./receipt/reciept.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    VoucherModule,
    RecieptModule,
    AccountingRoutingModule,
    CommonFooterModule,
    AdminRoutinModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [AccountingComponent]
})
export class AccountingModule { }
