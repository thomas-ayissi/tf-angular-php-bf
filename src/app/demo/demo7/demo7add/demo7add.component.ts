import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/utilisateur';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demo7add',
  templateUrl: './demo7add.component.html',
  styleUrls: ['./demo7add.component.scss']
})
export class Demo7addComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _userService : UserService, private _route : Router) { 
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      lastname: [null, [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      firstname: [null, [Validators.required]],
      birthdate : [null, [Validators.required, this.valideMajeur()]],
      telephone : [null, [Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]],
      nombreEnfants : [0, [Validators.required, Validators.min(0), Validators.max(6)]],
      email: [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    }
    );


  }

  addUser(){
    if(this.registerForm.valid)
    {
      console.log("C'est valide \\o/");
      //Pour récupérer juste un control
      console.log(this.registerForm.value.lastname);
      //Récupère tout le formulaire
      let utilisateurAAdd : IUser = {...this.registerForm.value, birthdate : new Date(this.registerForm.value.birthdate) };
      
      //Créer un objet grâce aux valeurs du formulaire
      //Utilisation d'un service pour l'envoyer au back-end
      this._userService.addUser(utilisateurAAdd);
      this._route.navigateByUrl('demo/demo7');
    }
    else {
      console.log("C'est pas valide :(");
      this.registerForm.markAllAsTouched();
    }
  }

  valideMajeur() : ValidatorFn | null {
    return (control : AbstractControl) => 
    {
      let birthdate = new Date(control.value);
      if(!(new Date().getFullYear() - birthdate.getFullYear() >= 18))
       {return { mineur : true}}
       else {
         return null;
       }
    }
  }

}
