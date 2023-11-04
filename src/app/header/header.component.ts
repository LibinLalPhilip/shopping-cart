import { Component } from '@angular/core';
import { Authorization } from '../services/authorisation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  log;

  constructor(private auth:Authorization){
    this.log=this.auth.logIn;
  }

  logIn(){
    this.log=this.auth.loggedIn();
    console.log(this.log);

  }

}
