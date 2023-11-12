import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'
import { Authorization } from '../services/authorisation.service';

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  log

  constructor(private auth:Authorization,public dialogRef:MatDialogRef<LoginDialogComponent>){
    this.log=this.auth.LoggedIn;
  }


  dialoglogin(){
    this.log=true;
    this.auth.login();
    this.dialogRef.close()
  }

}
