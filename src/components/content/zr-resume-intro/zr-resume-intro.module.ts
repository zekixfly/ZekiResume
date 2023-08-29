import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZrResumeIntroComponent } from './zr-resume-intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ZrResumeIntroComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ZrResumeIntroComponent]
})
export class ZrResumeIntroModule { }
