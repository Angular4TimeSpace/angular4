import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import {LoginGuard} from "./login.guard";

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule, HttpModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [LoginService, LoginGuard]
})

export class LoginModule { }
