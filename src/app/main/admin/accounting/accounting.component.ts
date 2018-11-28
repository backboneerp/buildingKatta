import { Component, OnInit } from '@angular/core';
import {ApplicationRoutes} from "../../../shared/application-route";
import {StringUtility} from "../../../shared/utility/string-utility.component";

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  public readonly receipt_management_url;
  public readonly voucher_management_url;
  public constructor(){

    this.receipt_management_url=StringUtility.join("/",ApplicationRoutes.RECEIPT);
    this.voucher_management_url=StringUtility.join("/",ApplicationRoutes.VOUCHER);
  }


  ngOnInit() {
  }

}
