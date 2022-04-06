import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo4enfant',
  templateUrl: './demo4enfant.component.html',
  styleUrls: ['./demo4enfant.component.scss']
})
export class Demo4enfantComponent implements OnInit {

  @Input() prenomParent! : string;
  @Input() isBold! : boolean;

  @Output() saluer : EventEmitter<string>;

  constructor() { 
    this.saluer = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  direBonjour()
  {
    //Si rien à émettre
    this.saluer.emit();
    //Si valeur à émettre au parent
    // this.saluer.emit("Hubert");
  }
}
