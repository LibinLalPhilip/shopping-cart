import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authorization {

  logIn='Log In';

  loggedIn(){
    this.logIn='Log Out';
    return this.logIn;
  }

  loggedOut(){
    // this.logIn=false
  }
}