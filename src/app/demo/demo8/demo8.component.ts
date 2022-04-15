import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  productsList : IProduct[] = [];
  researchForm! : FormGroup;
  categories : ICategory[] = [];

  constructor(private _shopService : ShopService, private _route : Router,
                private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.researchForm = this._fb.group({
      category : [null, []]
    });
    this._shopService.getAll().subscribe(
      data => this.productsList = data
    );

    this._shopService.getAllCategories().subscribe(
      categoriesResp => 
      {
        this.categories = categoriesResp;
      }
    );
  }

  deleteProduct(id : number)
  {
    this._shopService.deleteProduct(id).subscribe(
      response =>
      {
        this._route.routeReuseStrategy.shouldReuseRoute = () => false;
        this._route.onSameUrlNavigation = 'reload';
        this._route.navigateByUrl("/demo/demo8");
      }
    );
  }

  filterByCat(){
    this._shopService.getAll().subscribe(
      products => {
        if(this.researchForm.value.category)
        {
          this.productsList = products.filter(product => product.category == this.researchForm.value.category );
        }
        else {
          this.productsList = products;
        }
      }
    )
  }
}
