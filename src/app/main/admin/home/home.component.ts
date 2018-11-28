import { Component, ApplicationInitStatus } from '@angular/core';
import { ApplicationRoutes } from '../../../shared/application-route';
import { String } from 'typescript-string-operations';
import { StringUtility } from '../../../shared/utility/string-utility.component';
@Component({
    templateUrl: './home.view.html',
  styleUrls: ['./home.css'],
    selector: 'menu'
})
export class HomePageMenu {
 public readonly parking_management_url;
 public readonly asset_management_url;
 public readonly vendor_management_url;
 public readonly society_management_url;
 public readonly society_configuration_url;
 public readonly visitor_management_url;
 public readonly reports_url;
 public readonly administration_management;
 public readonly accounting_management;
 public constructor() {
    this.parking_management_url = StringUtility.join('/', ApplicationRoutes.PARKING_MANAGEMENT);
    this.asset_management_url = StringUtility.join('/', ApplicationRoutes.ASSET_MANAGEMENT);
    this.vendor_management_url = StringUtility.join('/', ApplicationRoutes.VENDOR_MANAGEMENT);
    this.society_management_url = StringUtility.join('/', ApplicationRoutes.SOCIETY_MANAGEMENT);
    this.society_configuration_url = StringUtility.join('/', ApplicationRoutes.SOCIETY_CONFIGURATION);
    this.administration_management = StringUtility.join('/', ApplicationRoutes.ADMINISTRATION_MANAGEMENT);
    this.visitor_management_url = StringUtility.join('/', ApplicationRoutes.VISITOR_MANAGEMENT);
    this.reports_url = StringUtility.join('/', ApplicationRoutes.REPORTS);
    this.accounting_management = StringUtility.join('/', ApplicationRoutes.ACCOUNTING_MANAGEMENT);

 }


}
