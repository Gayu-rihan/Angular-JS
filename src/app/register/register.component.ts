import { Component, OnInit } from '@angular/core';
import{FormGroup,FormsModule} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user=new User('shobana','sridhar',1234567890,'female','sho@gmail.com','1234','1234','Chennai','Tamilnadu',600048);
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form:any)
  {
    console.log(form.value);
  }

}
