import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {ClientModule} from './client/client.module';
import {AppRoutingModule} from './app-routing.module';

import {NgxSpinnerModule} from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgxSpinnerModule,

    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
