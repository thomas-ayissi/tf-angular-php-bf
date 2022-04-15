import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';
import { ICategory } from '../models/ICategory';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private _APIPRODUCTS : string = 'http://localhost:3000/products/';
  private _APICATEGORIES : string = 'http://localhost:3000/categories/';

  constructor(private _http : HttpClient) { }

  //PRODUITS
  getAll() : Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._APIPRODUCTS);
  }

  getById(id : number) : Observable<IProduct>{
    return this._http.get<IProduct>(this._APIPRODUCTS+id);
  }

  addProduct(product : IProduct) : Observable<IProduct>
  {
    return this._http.post<IProduct>(this._APIPRODUCTS, product);
  }

  editProduct(product : IProduct) : Observable<IProduct>{
    return this._http.put<IProduct>(this._APIPRODUCTS+product.id, product);
  }

  deleteProduct(id : number) : Observable<IProduct>{
    return this._http.delete<IProduct>(this._APIPRODUCTS+id);
  }

  //CATEGORIES
  getAllCategories() : Observable<ICategory[]>{
    return this._http.get<ICategory[]>(this._APICATEGORIES);
  }
}
