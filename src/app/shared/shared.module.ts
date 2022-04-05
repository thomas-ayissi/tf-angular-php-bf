import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarhenheitPipe } from 'src/app/pipes/to-farhenheit.pipe';
import { ConvertTempPipe } from '../pipes/convert-temp.pipe';
import { ConvertTimePipe } from '../pipes/convert-time.pipe';



@NgModule({
  declarations: [
    ToFarhenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFarhenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe
  ]
})
export class SharedModule { }
