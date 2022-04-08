import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      lastname: [null, [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      firstname: [null, [Validators.required]],
      birthdate : [null, [Validators.required]],
      telephone : [null, [Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]],
      nombreEnfants : [null, [Validators.required, Validators.min(0), Validators.max(6)]],
      email: [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    }
    );


  }

}
