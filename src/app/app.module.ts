import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZrContentLandingPageModule } from 'src/components/zr-content-landing-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ZrContentLandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
