import { Component, OnInit } from '@angular/core';
import {LoginService} from './../../login/login.service';
import { LoginGuard } from '../../login/login.guard';

declare var $: any;

@Component({
    selector: 'app-top-nav',
    templateUrl: 'topnav.html',
    providers: [LoginGuard]
})

export class TopNavComponent implements OnInit{

    constructor(private loginService: LoginService) {
    }
  
    ngOnInit() {
      
    }  
}
