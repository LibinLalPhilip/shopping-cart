import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authorization {

 LoggedIn;

 private loggedInSubject = new Subject<boolean>();

 getLoggedInSubject() {
   return this.loggedInSubject.asObservable();
 }


  login() {
    // Implement your authentication logic here
    // Set this.isLoggedIn to true if login is successful
    this.LoggedIn = true;
    this.loggedInSubject.next(true);
  }

  logout() {
    // Implement logout logic if needed
    this.LoggedIn = false;
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    console.log(this.LoggedIn);
    return this.LoggedIn;
  }
  
}