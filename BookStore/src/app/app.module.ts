import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
 //Components in this module.
  declarations: [
    AppComponent
  ],
  //imports module it depends on
  imports: [
    BrowserModule
  ],
  providers: [],
 //Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
