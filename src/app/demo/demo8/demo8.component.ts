import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  productsList : IProduct[] = [];
  
  constructor(private _shopService : ShopService) { }

  ngOnInit(): void {
    this._shopService.getAll().subscribe(
      data => this.productsList = data
    );
  }

}
