import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IRegister } from 'src/app/models/IRegister';

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
        nis : [null, [Validators.required]],
        lastname : [null, [Validators.required]],
        firstname : [null, [Validators.required]],
        birthdate : [null, [Validators.required]],
        gender : ['male', [Validators.required]],
        accountType : ['particulier', [Validators.required]],
        phone : [null, []],
        mail : [null, [Validators.required]],
        password : [null, [Validators.required]],
        confirmPassword : [null, [Validators.required]],
        hasAddress : [false, []]
      }, {validator : this.checkPassword}),
      addressData : this._fb.group({
        street : [null, [Validators.required]],
        number : [null, [Validators.required]],
        box : [null, []],
        zipCode : [null, [Validators.required, Validators.min(1000), Validators.max(9999)]],
        city : [null, [Validators.required]],
        country : [null, [Validators.required, this.checkCountry()]]

      })
    });
    
  }

  register(){
    if(this.registerForm.get('personalData')?.valid)
    {
      if(this.registerForm.get('personalData.hasAddress')?.value){
        if(this.registerForm.get('addressData')?.valid)
        {
          console.log("Formulaire personne + addresse envoyé");
          let personne : IRegister = this.registerForm.get('personalData')?.value;
          personne.address = this.registerForm.get('addressData')?.value;
          console.log(personne);
        }
        else {
          this.registerForm.get('addressData')?.markAllAsTouched();
        }
      }
      else {
        console.log("Formulaire sans adresse envoyé");
        let personne : IRegister = this.registerForm.get('personalData')?.value;
        console.log(personne);
      }
    }
    else {
      this.registerForm.get('personalData')?.markAllAsTouched();
    }
  }

  checkPassword(c : FormGroup) {
    if(c.get('password')?.value !== '' && c.get('confirmPassword')?.value !== ''){
      if(c.get('password')?.value !== c.get('confirmPassword')?.value){
        return { notsamepassword : true}
      }
      else return null;

    }
    return null;
  }

  checkCountry() : ValidatorFn | null {
    const countries = ["france", "belgique", "allemagne", "pays-bas", "pays bas"]
    return (control : AbstractControl) => {
      if(control.value !== '' && control.value)
    {
      if(countries.indexOf(control.value.toLowerCase()) == -1)
      {
        return { wrongcountry : true}
      }
      return null;
    }
    return null;
  }
}

}
