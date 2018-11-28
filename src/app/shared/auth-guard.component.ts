import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login,service';
@Injectable({
    providedIn: 'root'
})
export  class LoginGuard implements CanActivate {
    constructor(private route: Router, private login: LoginService) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> |Promise<boolean> | boolean {
         if (this.login.isLoggedIn) {
                return true;
            }
            const url = state.url;
            this.login.redirectPath = url;
        return true;
    }
}
