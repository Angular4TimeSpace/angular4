import { Injectable, EventEmitter, Output } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    
	private isLoggedIn:boolean = false;
    private redirectUrl:String;
    private loggedInUser:Object = null; 
      
    //rest service parameters
  	private headers = new Headers({ 'Content-Type': 'application/json' });
  	private bloggerUrl = '/api/login';
    
   	constructor(private http: Http){
    	 
   	}
    
    public getUser() : Object {
        return this.loggedInUser;
    }
    public setRedirectUrl(url:string) : void {
        this.redirectUrl = url;
    }
    
    public isValidUrl2Authenticate(url:string) : boolean {
        if(url == '/'){
            return true;
        }
        
        return this.isLoggedIn;
    }
    
    public loginUser(model) :  Observable<boolean> {        
      	return this.http.post(this.bloggerUrl, JSON.stringify(model), { headers: this.headers })
        .map((response) => {
            this.loggedInUser = response.json();
            if(this.loggedInUser["email"] == undefined){
                this.isLoggedIn = false;    
            }else {
                this.isLoggedIn = true;    
            }
            return  this.isLoggedIn;
        });
   }
}
