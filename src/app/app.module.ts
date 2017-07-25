import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ObserveOneComponent } from './observe-one/observe-one.component';
import { ObserveTwoComponent } from './observe-two/observe-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserveOneComponent,
    ObserveTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
