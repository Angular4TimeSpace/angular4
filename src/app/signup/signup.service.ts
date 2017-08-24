import { Injectable, EventEmitter, Output } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService { 
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private bloggerUrl = '/api/saveUser';
   constructor(private http: Http){
     
   }
  
   registerUser(model) {
      console.log("registerUser");
      let url = 'http://localhost:8080/api/saveUser';
      this.http.post(this.bloggerUrl, JSON.stringify(model), { headers: this.headers })
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
        /*.subscribe(
          res => console.log(res.json()),
          err => console.log("Can't save user. Error code: %s, URL: %s ", err.status, err.url),
          () => console.log('User got registered successfully')
      );*/
     
     
   }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error._body);
    return Promise.reject(error.message || error);
  }
}