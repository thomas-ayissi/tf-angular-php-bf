import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm! : FormGroup;
  categories : ICategory[] = [];

  constructor(private _fb : FormBuilder, private _shopService : ShopService, private _route : Router) { }

  ngOnInit(): void {
    this.productForm = this._fb.group(
      {
        name : [null,[Validators.required]],
        description : [null, [Validators.required]],
        category : [null, [Validators.required]],
        price : [0, [Validators.required]]
      }
    );

    this._shopService.getAllCategories().subscribe(
      categories => this.categories = categories
    )
  }

  addProduct()
  {
    if(this.productForm.valid){
      let product = { ...this.productForm.value, category : parseInt(this.productForm.value.category) , id : 0};
      this._shopService.addProduct(product).subscribe(
        data => console.log(data)
      );
      this._route.navigateByUrl('/demo/demo8');
    }
    else {
      this.productForm.markAllAsTouched();
    }
  }
}
