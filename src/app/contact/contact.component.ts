import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { Statement } from '@angular/compiler';
import{ FormBuilder } from '@angular/forms';
import {Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 /* contactForm= new FormGroup({
    fullname:new FormControl('Shobanasridhar'),
    email:new FormControl(''),
    comments:new FormControl(''),
    address:new FormGroup({ 
      city:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl('')
    }),

  });*/
  contactForm=this.fb.group({
    fullname:['',[Validators.required,Validators.minLength(3)]],
    email:['sho@gmail.com'],
    comments:['good'],
    address:this.fb.group({
      city:['parris'],
      state:['france'],
      pincode:[600048]
    }),

  });



  constructor(private fb:FormBuilder) {
    
   }
   
  /* contactForm=this.fb.group({
    fullname:['shobanasridhar'],
    email:['sho@gmail.com'],
    comments:['good'],
    address:this.fb.group({
      city:['parris'],
      state:['france'],
      pincode:[600048]
    }),

  });*/

  ngOnInit() {

    
  }
  onSubmit():void{
    console.log(this.contactForm.value);
  }
  
  loadData(){
    this.contactForm.setValue({
      fullname:'Shobana',
      email:'sho@gmail.com',
      address:{
        city:'Chennai',
        state:'Tamilnadu',
        pincode:600048
      },
      comments:'good and can be better too....'

    });
  }

}
