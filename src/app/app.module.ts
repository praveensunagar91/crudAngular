import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TempdisplayComponent } from './tempdisplay/tempdisplay.component';
import { NavbarComponent } from './tempdisplay/navbar/navbar.component';
import { routing } from './app.routing';
import { AddtaskComponent } from './tempdisplay/addtask/addtask.component';
import { UpdatetaskComponent } from './tempdisplay/updatetask/updatetask.component';
import { GrdFilterPipe } from './tempdisplay/search-filter.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { ReactdisplayComponent } from './reactdisplay/reactdisplay.component';
import { AdddataComponent } from './reactdisplay/adddata/adddata.component';
import { UpdatereactComponent } from './reactdisplay/updatereact/updatereact.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    TempdisplayComponent,
    NavbarComponent,
    GrdFilterPipe,
    ReactdisplayComponent,
    AdddataComponent,
    UpdatereactComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
