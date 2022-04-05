import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';

const routes: Routes = [
  // { path: ''},
  { path: 'demo', component: DemoComponent, loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule) },
  { path: 'exercice', component : ExerciceComponent, loadChildren : () => import('./exercice/exercice.module').then(m => m.ExerciceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
