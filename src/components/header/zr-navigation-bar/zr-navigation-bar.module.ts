import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZrNavigationBarComponent } from './zr-navigation-bar.component';



@NgModule({
  declarations: [
    ZrNavigationBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ZrNavigationBarComponent],
})
export class ZrNavigationBarModule { }
