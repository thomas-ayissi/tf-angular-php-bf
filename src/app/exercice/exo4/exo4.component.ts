import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {

  //formulaire
  registerForm! : FormGroup;
  
  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this._fb.group({
      personalData : this._fb.group({
        nis : [null, []],
        lastname : [null, []],
        firstname : [null, []],
        birthdate : [null, []],
        gender : ['male', []],
        accountType : ['particulier', []],
        phone : [null, []],
        mail : [null, []],
        password : [null, []],
        confirmPassword : [null, []],
        hasAddress : [false, []]
      }),
      addressData : this._fb.group({
        street : [null, []],
        number : [null, []],
        box : [null, []],
        zipCode : [null, []],
        city : [null, []],
        country : [null, []]

      })
    });
    
  }

  register(){
    console.log(this.registerForm);
  }

}
