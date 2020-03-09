import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseModule } from './firebase/firebase.module';

import { MatSliderModule } from '@angular/material/slider';

import * as data from '../config/firebaseConfig.json';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = (data as any).firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    SnippetsComponent,
    SnippetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule.forRoot(firebaseConfig),
    MatSliderModule,
    StoreDevtoolsModule,
    StoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
