import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
    <h3>Child</h3>
    <button (click)="sendMessage()">Send Message</button>
  `,
  // templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() message:EventEmitter<string> = new EventEmitter();


  sendMessage(){
    this.message.emit("Hi I'm child!");
  }

  ngOnInit(): void {
  }

}
