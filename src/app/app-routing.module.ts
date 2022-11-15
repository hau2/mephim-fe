import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TheaterListComponent} from './components/theater/theater-list/theater-list.component';
import {ChooseSeatComponent} from './pages/choose-seat/choose-seat.component';


const routes: Routes = [
  {path: 'home', component: TheaterListComponent},
  {path: 'choose-seat', component: ChooseSeatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
