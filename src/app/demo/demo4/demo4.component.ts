import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  prenom! : string;
  message : string = "Oh là là quel beau mercredi";

  constructor() { }

  ngOnInit(): void {
  }

  //Si on emit aucune valeur :
  saluerEnRetour(){
    this.message = "Oh salut mon enfant !"
  }

  //Si on emit une valeur
  // saluerEnRetour(prenomEnfant : string){
  //   this.message = `Oh salut mon enfant ! ${prenomEnfant} t'es mon préféré`;
  // }
}
