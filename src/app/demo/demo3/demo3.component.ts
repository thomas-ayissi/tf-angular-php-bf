import { Component, OnInit } from '@angular/core';
import { Achat } from 'src/app/models/achat';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  //Pour le ngStyle
  isBig : boolean = false;
  isBold : boolean = false;
  isItalic : boolean = false;
  style! : any;
  //Pour le ngClass
  isRed : boolean = false;

  //Pour le ngIf
  isCoucoued : boolean = false;

  //Pour le ngFor
  listeCourse : string[] = ["Patates", "Beurre", "Lait", "Fromage"];
  listeCourseObj : Achat[] = [
    {nom : "Patates", price : 5},
    {nom : "Beurre", price : 2.50},
    {nom : "Lait", price : 0.50},
    {nom : "Fromage", price : 2.36}
  ]
  
  //Pour le ngSwitch
  // monChoix : number = 0;
  monChoix : string  ="";

  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(){
    this.style = { 
      'font-size' : this.isBig ? "25px" : "16px",
      'font-weight' : this.isBold ? "bold" : "normal",
      'font-style' : this.isItalic ? "italic" : "normal"
    };
  }

  toggleBig(){
    this.isBig = !this.isBig;
    this.setStyle();
  }

  toggleBold(){
    this.isBold = !this.isBold;
    this.setStyle();
  }

  toggleItalic(){
    this.isItalic = !this.isItalic;
    this.setStyle();
  }

  toggleRed(){
    this.isRed = !this.isRed;
  }

  toggleCoucou(){
    this.isCoucoued = !this.isCoucoued;
  }
}
