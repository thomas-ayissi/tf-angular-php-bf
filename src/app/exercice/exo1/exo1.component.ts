import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  secondes : number = 0;
  timer : any;
  estLance : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.timer = setInterval(() => { this.secondes++ }, 1000);
    this.estLance = true;
  }

  pause(){
    clearInterval(this.timer);
    this.estLance = false;
    //this.timer = null;
  }

  reset(){
    this.secondes = 0;
    this.pause();
  }
}
