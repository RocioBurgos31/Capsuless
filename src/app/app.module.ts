import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//comando git init, git  add . , git commit -m "Proyecto space version 1.0" , copiar la linea git remote add origin https://github.com/Juandepom2/space-5v.git
// git remote -v
// git push - u origin master
//para actualizar
// git add.
//  git commit -m "Proyecto space version 1.1" Juandepom2
// GIT PUSH git config --global user.email "juancarlosjuarez26@gmail.com"
//git config --global user.name "Juandepom2"
