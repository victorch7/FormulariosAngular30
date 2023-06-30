import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component';
import { NinosComponent } from './ninos/ninos.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { AddListMessagesComponent } from './add-list-messages/add-list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Formulario3Component,
    NinosComponent,
    AddMessagesComponent,
    AddListMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
