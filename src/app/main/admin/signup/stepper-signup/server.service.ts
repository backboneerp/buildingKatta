import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpModel } from './signup-model';
@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
  storeServers( servers:SignUpModel  ):Observable<HttpResponse<boolean>> {
    const _header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    const url:string='http://localhost:8080/BulidingKattaRegister';

    return this.http.post<HttpResponse<boolean>>(url,servers,{headers:_header});


   // 'http://localhost:8080/BulidingKattaRegister',servers,headers);

    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    //console.log(servers);
    //return this.http.p('http://localhost:8080/BulidingKattaRegister',servers,headers);
    

  }

  // getServers() {
  //   return this.http.get('http://localhost:8081/BulidingKattaRegister')
  //     .map(
  //       (response: Response) => {
  //         const data = response.json();
  //         for (const server of data) {
  //           server.name = 'yoyo_' + server.name;
  //         }
  //         return data;
  //       }
  //     )
  //     .catch(
  //       (error: Response) => {
  //         return Observable.throw('Something went wrong');
  //       }
  //     );
  // }

  // getAppName() {
  //   return this.http.get('http://localhost:8081/BulidingKattaRegister')
  //     .map(
  //       (response: Response) => {
  //         return response.json();
  //       }
  //     );
  // }
}
