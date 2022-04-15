import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm! : FormGroup;
  categories : ICategory[] = [];
  product! : IProduct;
  disab : boolean = true;

  constructor(private _fb : FormBuilder, private _shopService : ShopService,
             private _activeRoute : ActivatedRoute,
             private _route : Router) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._shopService.getById(id).subscribe(
      responseProduct => 
      {
        this.product = responseProduct;
        this.productForm = this._fb.group(
          {
            name : [responseProduct.name,[Validators.required]],
            description : [responseProduct.description, [Validators.required]],
            category : [responseProduct.category, [Validators.required]],
            price : [responseProduct.price, [Validators.required]]
          }
        );
      }
    );    

    this._shopService.getAllCategories().subscribe(
      categories => this.categories = categories
    )
  }

  updateProduct(){
    if(this.productForm.valid){
      let product = {... this.productForm.value, 
                      category : parseInt(this.productForm.value.category),
                      id : this.product.id};
      this._shopService.editProduct(product).subscribe(
        productAdded => this._route.navigateByUrl("/demo/demo8")
      )

    }
    else 
    {
      this.productForm.markAllAsTouched();
    }
  }

}
