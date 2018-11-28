import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { FlatComponent } from './administration/flat/flat.component';
import { VendorComponent } from './vendor/vendor.component';
import { VisitorComponent } from './visitor/visitor.component';
import { ParkingComponent } from './parking/parking.component';
import { AssetDetailsComponent } from './asset/asset-details.component';
import { ParkingDetailsComponent } from './parking/parking-details.component';
import { VendorDetailsComponent } from './vendor/vendor-details.component';
import { VisitorDetailsComponent } from './visitor/visitor-detail.component';
import { LoginGuard } from '../../shared/auth-guard.component';
import { ApplicationRoutes } from '../../shared/application-route';
import {ConfigurationDetailsComponent} from "./configuration/configuration-details.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import { SocietyComponent } from './society/society.component';
import {ReportsComponent} from "./reports/reports.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {AccountingComponent} from "./accounting/accounting.component";
const adminRoutes: Routes = [
    {
       path: 'asset',
       component: AssetComponent

    }
    , {
        path: 'vendor',
        component: VendorComponent
    },
    {
        path: 'visitors',
        component: VisitorComponent
    },
    {
        path: 'parking',
        component: ParkingComponent
    },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: 'society',
    component: SocietyComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'accounting',
    component: AccountingComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
    {
        path: ApplicationRoutes.ASSET_MANAGEMENT,
        component: AssetDetailsComponent

     },
     {
         path: ApplicationRoutes.PARKING_MANAGEMENT,
         component: ParkingDetailsComponent

      }
      ,
     {
         path: ApplicationRoutes.VENDOR_MANAGEMENT,
         component: VendorDetailsComponent

      } ,
      {
          path: ApplicationRoutes.VISITOR_MANAGEMENT,
          component: VisitorDetailsComponent
       },
  {
    path: ApplicationRoutes.SOCIETY_CONFIGURATION,
    component: ConfigurationDetailsComponent
  },
  {
    path: ApplicationRoutes.SOCIETY_MANAGEMENT,
    component: SocietyComponent
  },
  {
    path: ApplicationRoutes.REPORTS,
    component: ReportsComponent
  },
  {
    path: ApplicationRoutes.ACCOUNTING_MANAGEMENT,
    component: AccountingComponent
  },
  {
    path: ApplicationRoutes.SIGNING,
    component: SigninComponent
  }
  ,
  {
    path: ApplicationRoutes.SIGNUP,
    component: SignupComponent
  }
 ];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutinModule {
}
