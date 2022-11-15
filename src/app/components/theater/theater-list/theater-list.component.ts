import { Component, OnInit } from '@angular/core';
import {TheaterServiceService} from '../../../services/theater-service.service';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit {
  listTheater: any = [];
  constructor(private theaterService: TheaterServiceService) { }

  ngOnInit(): void {
    this.theaterService.findAllTheater().subscribe((data) => {
      this.listTheater = data;
    })
  }

}
