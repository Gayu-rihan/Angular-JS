import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(uname,passwd){
    //console.log('before: ' +this.isUserLoggedIn());
    if(uname =='shobana' &&  passwd =='1234')
    {
      sessionStorage.setItem('authenticatedUser',uname);
      //console.log('before: ' +this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn()
  {
    let usr=sessionStorage.getItem('authenticatedUser');
    return !(usr === null);

  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }

}
