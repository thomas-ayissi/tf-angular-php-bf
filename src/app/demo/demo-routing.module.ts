import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';

const routes: Routes = [
  { path : "demo", component : DemoComponent, children : [
    { path : "demo1", component : Demo1Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
