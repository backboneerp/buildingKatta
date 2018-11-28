import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    templateUrl:'./footer.html',
    styleUrls:['./footer-style.css'],
    selector:'footer'
})
export class Footer implements OnInit{
    constructor(private router:Router,private rout:ActivatedRoute){}
    ngOnInit(){
    }
}