import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {
  products : Product[] = [];
  product! : string;

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    //this.products = this._productService.productsList;
  }

  addToCart(){
    let productToAdd = { name : this.product, quantity : 1};
    this.products = this._productService.addProduct(productToAdd);
    this.product = "";
  }

  deleteFromCart(indice : number){
    this.products = this._productService.deleteProduct(indice);
  }

  upQuantity(indice : number){
    this.products = this._productService.upQuantityProduct(indice);
  }
}
