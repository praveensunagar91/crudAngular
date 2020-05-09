import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TempdisplayComponent } from './tempdisplay/tempdisplay.component';
import { NavbarComponent } from './tempdisplay/navbar/navbar.component';
import { routing } from './app.routing';
import { AddtaskComponent } from './tempdisplay/addtask/addtask.component';
import { UpdatetaskComponent } from './tempdisplay/updatetask/updatetask.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    TempdisplayComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
