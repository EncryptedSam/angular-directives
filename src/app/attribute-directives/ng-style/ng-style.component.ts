import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  textStyle:object;
  isColorChecked:boolean = false;
  isBorderChecked:boolean = false;
  isPaddingChecked:boolean = false;
  isFontWeightChecked:boolean = false;
  
  ngOnInit(): void {
  }
  
  ngDoCheck(){
    this.textStyle = {
      'color': this.isColorChecked ?'red':'',
      'border': this.isBorderChecked ? '2px solid black':'',
      'padding': this.isPaddingChecked ? '5px':'',
      'font-weight': this.isFontWeightChecked ? 'bold':''
    };
  }

}
