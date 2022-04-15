import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  // { path: ''},
  { path : 'notfound' , component : NotfoundComponent},
  { path: 'demo', component: DemoComponent, loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule) },
  { path: 'exercice', component : ExerciceComponent, loadChildren : () => import('./exercice/exercice.module').then(m => m.ExerciceModule) },
  { path : '**', redirectTo : 'notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
