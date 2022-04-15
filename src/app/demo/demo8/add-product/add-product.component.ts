import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm! : FormGroup;

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this._fb.group(
      {
        name : [null,[Validators.required]],
        description : [null, [Validators.required]],
        category : [null, [Validators.required]],
        price : [0, [Validators.required]]
      }
    )
  }

}
