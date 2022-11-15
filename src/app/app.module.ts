import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TheaterListComponent } from './components/theater/theater-list/theater-list.component';
import { ShowDateComponent } from './components/theater/show-date/show-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterListComponent,
    ShowDateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
