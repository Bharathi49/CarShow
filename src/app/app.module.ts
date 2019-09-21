import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddtaskComponent,
    ViewtaskComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'add' , component : AddtaskComponent},
      { path : 'view' , component : ViewtaskComponent}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
