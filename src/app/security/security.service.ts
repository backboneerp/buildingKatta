import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable(
   {
       providedIn: 'root'
   }
)
export class GlobalSecurity {
    constructor( private sanitizer: DomSanitizer) {
    }
    public sanitize(data: string): string {
        let wash = this.sanitizer.bypassSecurityTrustHtml(data);
        wash = this.sanitizer.bypassSecurityTrustResourceUrl(<string>wash);
        wash = this.sanitizer.bypassSecurityTrustScript(<string>wash);
        wash = this.sanitizer.bypassSecurityTrustStyle(<string>wash);
        wash = this.sanitizer.bypassSecurityTrustUrl(<string>wash);
        return  <string>wash;
    }
}
