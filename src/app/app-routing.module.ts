import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TheaterListComponent} from './components/theater/theater-list/theater-list.component';


const routes: Routes = [
  {path: 'home', component: TheaterListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
