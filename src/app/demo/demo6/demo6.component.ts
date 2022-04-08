import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      lastname: [null, []],
      firstname: [null, []],
      birthdate : [null, []],
      email: [null, []],
      password : [null, []]
    }
    );

  }

}
