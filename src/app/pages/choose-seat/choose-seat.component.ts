import { Component, OnInit } from '@angular/core';
import {TheaterServiceService} from '../../services/theater-service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.scss']
})
export class ChooseSeatComponent implements OnInit {
  listSeat: any = [];
  lengthRoom: number;
  widthRoom: number;

  constructor(private theaterService: TheaterServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routerParam = this.route.snapshot.params;
    console.log('--route: ', routerParam);
    this.theaterService.findSeatToBooking(routerParam.showDateId, routerParam.showTimeId, routerParam.ticketId).subscribe((res) => {
      this.listSeat = res;
      console.log(this.listSeat);
      this.lengthRoom = Math.floor(Math.sqrt(this.listSeat.length));
      this.widthRoom = this.listSeat.length / this.lengthRoom;

      console.log('---length: ', this.lengthRoom);
      console.log('---width: ', this.widthRoom);
    });
  }

}
