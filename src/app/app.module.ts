import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TheaterListComponent } from './components/theater/theater-list/theater-list.component';
import { MovieTicketListComponent } from './components/movie/movie-ticket-list/movie-ticket-list.component';
import {ShowDateComponent} from './components/movie/show-date/show-date.component';
import {ShowTimeComponent} from "./components/movie/show-time/show-time.component";
import { ChooseSeatComponent } from './pages/choose-seat/choose-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterListComponent,
    ShowDateComponent,
    MovieTicketListComponent,
    ShowTimeComponent,
    ChooseSeatComponent
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
