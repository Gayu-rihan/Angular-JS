import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  desc;
  st;
  todos=[
    {description:'read for 2 hrs',status:false},
    {description:'practice programming for 1 hr',status:false}
  ];

  constructor() { }

  ngOnInit() {
  }
 /* del():(string:any,boolean:any)=>{
    this.desc=document.getElementById('todos.description');
    this.st=document.getElementById('todos.status');

  }*/

}
