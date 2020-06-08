import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-asterisk',
  templateUrl: './ng-for-asterisk.component.html',
  styleUrls: ['./ng-for-asterisk.component.css']
})
export class NgForAsteriskComponent implements OnInit {

  constructor() { }

  names:string[] = ["Saanvi","Sahana", "Saisha"];

  ngOnInit(): void {
  }

}
