import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpEvent} from '@angular/common/http';
import { User } from './user.model';
import { CommonConstant } from './common-constant';
import { SignUpConstant } from '../main/authentication/signin/constant';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {
    private _isLoggedIn: boolean;
    private _redirectPath: string;
    constructor(private http: HttpClient) {
        this._isLoggedIn = false;
        this._redirectPath = SignUpConstant.ADMIN_LOGIN_URL;
    }
    public readonly loginUrl = SignUpConstant.ADMIN_LOGIN_URL;
    public authenticate(user: User): Observable<HttpEvent<User>> {
        const httpHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<User>(this.loginUrl, httpHeaders, CommonConstant.PROGRESS_EVENT);
    }
    public get isLoggedIn() {
        return this._isLoggedIn;
    }
    public set isLoggedIn(_loggedIn: boolean) {
        this._isLoggedIn = _loggedIn;
    }
    public set redirectPath(redirectPath: string) {
        this._redirectPath = redirectPath;
    }
    public get redirectPath() {
        return this._redirectPath;
    }

}
