import { NgModule } from "@angular/core";
import { Footer } from "./footer/footer.component";
import { Header } from "./header/header.component";
import { CalenderComponent } from "./calendar/calendar.component";
import { DashboarComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { MobileMenu } from "./mobilemenu/mobile-menu.component";
import { SidebarMenu } from "./sidebarmenu/sidebar-menu.component";
import { HeaderProfile } from "./header/header-profile.component";
import { DashboardSubmenu } from "./dashboard/dashboar-submenu.component";
import { CalendarSubmenu } from "./calendar/calendar-submenu.component";
@NgModule({
    declarations:[Footer,Header,
        CalenderComponent,
        DashboarComponent,
        MenuComponent,
        MobileMenu,
        SidebarMenu,
        HeaderProfile,DashboardSubmenu,CalendarSubmenu],
    exports:[Footer,Header ,CalenderComponent,
        DashboarComponent,
        MenuComponent,
        MobileMenu,
        CalendarSubmenu,SidebarMenu,HeaderProfile,DashboardSubmenu]
})
export class CommonFooterModule{

}