import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  // styl = "style-1 style-2 style-3";

  // stylAry = ['style-1', 'style-2', 'style-3'];

  // stylObj = {
  //   'style-1':true,
  //   'style-2':true,
  //   'style-3':true
  // }










  textStyle:object;

  currentStyle:string = "styl1";

  ngDoCheck(){
    this.textStyle = {
      'style-1':this.currentStyle == "styl1"?true:false, 
      'style-2':this.currentStyle == "styl2"?true:false, 
      'style-3':this.currentStyle == "styl3"?true:false
    }
  }

  ngOnInit(): void {
  }

}
