import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //ou links = Link[]
  links : Array<Link> = [
    { title : "Accueil", url : "/"},
    { title : "Demo", url : "/demo", children : [
      { title : "Demo 1 - Bindings", url : "/demo/demo1" },
      { title : "Demo 2 - Pipes", url : "/demo/demo2"},
      { title : "Demo 3 - Les directives", url : "/demo/demo3"},
      { title : "Demo 4 - @Input & @Output", url : "/demo/demo4"},
      { title : "Demo 5 - Services et Injection", url : "/demo/demo5"},
      { title : "Demo 6 - Formulaires", url : "/demo/demo6"},
      { title : "Demo 7 - Redirection Route", url : "/demo/demo7"}
    ]},
    { title : "Exercices", url : "/exercice", children : [
      { title : "Exercice 1 - Le Timer", url : "/exercice/exo1"},
      { title : "Exercice 2 - Shopping List", url : "/exercice/exo2"},
      { title : "Exercice 3 - Shopping List Le Retour", url : "/exercice/exo3"},
      { title : "Exercice 4 - Formulaire", url : "/exercice/exo4"}
    ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleChildren(indice : number) : void{
    this.links[indice].isVisible = !this.links[indice].isVisible;
  }
}
