import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private _APIPRODUCTS : string = 'http://localhost:3000/products';
  private _APICATEGORIES : string = 'http://localhost:3000/categories';

  constructor(private _http : HttpClient) { }

  //PRODUITS
  getAll() : Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._APIPRODUCTS);
  }

  //CATEGORIES
}
