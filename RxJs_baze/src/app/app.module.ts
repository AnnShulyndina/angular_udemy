import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { VenegredComponent } from './venegred/venegred.component';


@NgModule({
  declarations: [
    AppComponent,
    VenegredComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule{}
