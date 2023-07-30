import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreheaderComponent } from './preheader/preheader.component';
import { appRoutingModuleS } from './app-routingModule';
import { StartoneComponent } from './startone/startone.component';
import { puppiemodule } from './puppies/puppies-module';
import { puppyworldModule } from './puppy-world/puppyworld-module';
import { sharedModule } from './shared/shared=module';
import { commonModule } from './commonModule';
import { authModules } from './auth/authMOdule';
import { CartOneComponent } from './cart-one/cart-one.component';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreheaderComponent,
    StartoneComponent,
    CartOneComponent,
    NotesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModuleS,
    puppiemodule,
    puppyworldModule,
    sharedModule,
    commonModule,authModules
  ],
 providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
