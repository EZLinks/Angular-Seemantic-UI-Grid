import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSemanticUiGridModule } from 'angular-semantic-ui-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularSemanticUiGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
