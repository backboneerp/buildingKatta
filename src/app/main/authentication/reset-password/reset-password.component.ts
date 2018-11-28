import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleFunction } from '../../common-clasess/project-title.constant';
@Component({
    templateUrl: './reset-password.view.html',
    styleUrls: ['./reset-password.style.scss']
})
export class ResetPassword {
    constructor(private title: Title) {
        this.title.setTitle('Reset Password | ' + TitleFunction.projectTitle);
    }
}


