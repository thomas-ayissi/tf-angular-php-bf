import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

  @Input() produits : Product[] = [];
  @Output() onDelete : EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpQtt : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendIdToDelete(indice : number) : void
  {
    this.onDelete.emit(indice);
  }

  sendIdToUp(indice : number) : void {
    this.onUpQtt.emit(indice);
  }
}
