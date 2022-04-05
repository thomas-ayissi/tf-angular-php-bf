import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarhenheitPipe } from 'src/app/pipes/to-farhenheit.pipe';
import { ConvertTempPipe } from '../pipes/convert-temp.pipe';



@NgModule({
  declarations: [
    ToFarhenheitPipe,
    ConvertTempPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFarhenheitPipe,
    ConvertTempPipe
  ]
})
export class SharedModule { }
