import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  registerForm!: FormGroup;
  usersList : Utilisateur[] = [];

  constructor(private _fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      lastname: [null, [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      firstname: [null, [Validators.required]],
      birthdate : [null, [Validators.required]],
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
      console.log(this.registerForm.value.lastname);
      let utilisateurAAdd : Utilisateur = {
        nom : this.registerForm.value.lastname,
        prenom : this.registerForm.value.firstname,
        dateNaissance : this.registerForm.value.birthdate,
        email : this.registerForm.value.email,
        password : this.registerForm.value.password,
        nbEnfant : this.registerForm.value.nombreEnfants,
        tel : this.registerForm.value.telephone || null
      }
      console.log(utilisateurAAdd);
      //Créer un objet grâce aux valeurs du formulaire
      //Utilisation d'un service pour l'envoyer au back-end
      this.usersList.push(utilisateurAAdd);
      this.registerForm.reset({
        nombreEnfants : [0]
      });
    }
    else {
      console.log("C'est pas valide :(");
      this.registerForm.markAllAsTouched();
    }
  }

}
