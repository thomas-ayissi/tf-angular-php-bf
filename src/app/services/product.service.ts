import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList : Product[] = [];
  
  private _productsList : Product[] = [
    { name : "Patates", quantity : 1},
    { name : "Concombre", quantity : 2}
  ]

  constructor() { }

  getProducts() : Product[]{
    return this._productsList;
  }

  addProduct(produit : Product) : Product[]
  {
    let i : number = this._productsList.findIndex(prod => prod.name.toLowerCase() === produit.name.toLowerCase());
    if(i > -1)
    {
      this._productsList[i].quantity = this._productsList[i].quantity + 1;
    }
    else {
      this._productsList.push(produit);
    }
    return this._productsList;
  }

  deleteProduct(indice : number) : Product[]
  {
    this._productsList.splice(indice, 1);
    return this._productsList;
  }

  upQuantityProduct(indice : number) : Product[]
  {
    this._productsList[indice].quantity = this._productsList[indice].quantity + 1;
    return this._productsList;
  }
}
