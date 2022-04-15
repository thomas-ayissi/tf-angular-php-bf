import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { NavComponent } from './nav/nav.component';
import { ToFarhenheitPipe } from './pipes/to-farhenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExerciceRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
