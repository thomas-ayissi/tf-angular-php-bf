import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  monNumber : number = 15.4859674852325;
  maChaine : string = "Je suis une super chaîne, j'te jure !";
  monAnniversaire : Date = new Date(1989,9,16);

  maTemperature : number = 10;
  maTemperatureF : number = 50;
  
  constructor() { }

  ngOnInit(): void {
  }

}
