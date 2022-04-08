import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo4enfantComponent } from './demo4/demo4enfant/demo4enfant.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo4enfantComponent,
    Demo5Component,
    Demo6Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    //Module pour utilisation du ngModel (binding Two Way)
    FormsModule,
    //Module pour l'utilisation des ReactivForm : Formulaire via formBuilder
    ReactiveFormsModule,
    //Module partagé dans lequel on a mis les pipes
    SharedModule
  ]
})
export class DemoModule { }
