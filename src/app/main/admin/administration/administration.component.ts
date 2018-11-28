import { Component } from "@angular/core";
import { ApplicationRoutes } from "../../../shared/application-route";
import { String} from "typescript-string-operations";
import { StringUtility } from "../../../shared/utility/string-utility.component";
@Component({
    templateUrl:'./administration.view.html',
    styleUrls:['./administration.style.css']
})
export class AdministrationComponent{



    public readonly user_management_url;
    public readonly role_management_url;
    public readonly servic_management_url;
    public readonly flat_managemnet_url;
    public constructor(){
        this.user_management_url=StringUtility.join("/",ApplicationRoutes.USER_MANAGEMET);
        this.role_management_url=StringUtility.join("/",ApplicationRoutes.ROLE_MANAGEMENT);
        this.servic_management_url=StringUtility.join("/",ApplicationRoutes.SERVICE_MANAGEMENT);
        this.flat_managemnet_url=StringUtility.join("/",ApplicationRoutes.FLAT_MANAGEMENT);
    }
}
