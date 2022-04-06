import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  products : string[] = ["Pommes","Bananes"];
  product! : string;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.products.push(this.product);
    this.product = "";
  }

  deleteFromCart(indice : number){
    this.products.splice(indice, 1);
  }
}
