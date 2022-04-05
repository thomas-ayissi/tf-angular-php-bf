import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  monPrenom : string = "Aude";
  monMessage : string = "";
  monPlaceholder : string = "Entrez un truc";
  isClickable : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  direBonjour(langue : string) : void {
    switch(langue){
      case "fr" : 
        this.monMessage = `Bonjour ${this.monPrenom} !!!!`;
        break;
      case "en" :
        this.monMessage = `Hello ${this.monPrenom} !!!!`;
        break;
      case "es" :
        this.monMessage = `Hola ${this.monPrenom} !!!!`;
        break;
      default : 
        this.monMessage = `fnhesjfns ${this.monPrenom} !!!! (bonjour en klingon)`;
        break;
    }
    this.isClickable = false;
  }
}
