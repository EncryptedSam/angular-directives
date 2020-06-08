import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
    <h3>Parent</h3>
    Message: {{msg}}
    <br>
    <app-child (message)="reciveMessage($event)"></app-child>

  `,
  // templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  msg:string;

  reciveMessage(m){
    this.msg = m;
  }

  ngOnInit(): void {
  }

}
