import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
