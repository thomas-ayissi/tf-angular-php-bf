import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo7addComponent } from './demo7/demo7add/demo7add.component';
import { Demo7detailsComponent } from './demo7/demo7details/demo7details.component';
import { AddProductComponent } from './demo8/add-product/add-product.component';
import { Demo8Component } from './demo8/demo8.component';
import { EditProductComponent } from './demo8/edit-product/edit-product.component';

const routes: Routes = [
  { path : "", component : DemoComponent, children : [
    { path : "demo1", component : Demo1Component},
    { path : "demo2", component : Demo2Component},
    { path : "demo3", component : Demo3Component},
    { path : "demo4", component : Demo4Component},
    { path : "demo5", component : Demo5Component},
    { path : "demo6", component : Demo6Component},
    { path : "demo7", component : Demo7Component},
    { path : "demo7add", component : Demo7addComponent},
    { path : "demo7/:id", component : Demo7detailsComponent},
    { path : "demo8", component : Demo8Component},
    { path : "demo8/add", component : AddProductComponent},
    { path : "demo8/edit/:id", component : EditProductComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
