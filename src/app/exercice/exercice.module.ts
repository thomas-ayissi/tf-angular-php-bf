import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { ShowListComponent } from './exo2/show-list/show-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exo3Component } from './exo3/exo3.component';
import { ShowlistComponent } from './exo3/showlist/showlist.component';
import { Exo4Component } from './exo4/exo4.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2Component,
    ShowListComponent,
    Exo3Component,
    ShowlistComponent,
    Exo4Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
