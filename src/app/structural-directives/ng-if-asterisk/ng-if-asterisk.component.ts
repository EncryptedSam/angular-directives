import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-asterisk',
  templateUrl: './ng-if-asterisk.component.html',
  styleUrls: ['./ng-if-asterisk.component.css']
})
export class NgIfAsteriskComponent implements OnInit {

  constructor() { }

  displayName:boolean = true;

  ngOnInit(): void {
  }

}
