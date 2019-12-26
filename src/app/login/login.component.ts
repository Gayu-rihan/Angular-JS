import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import{FormGroup,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username;
  password;
  invalidMsg="Invalid credentials";
  invalidLoginFlag=false;
  isDisabled = true;
  constructor(private router:Router,private auth:AuthenticationService) { }

  ngOnInit() {
  }
  /*onSubmit(form:any)
  {
    console.log(form.value);
  }
*/
  login():void{
   // console.log(this.username+' '+this.password);
    if(this.auth.authenticate(this.username,this.password))
    {
      this.invalidLoginFlag=false;
      this.router.navigate(['welcome']);
    }
    else{
      this.invalidLoginFlag=true;
    }
}

}
