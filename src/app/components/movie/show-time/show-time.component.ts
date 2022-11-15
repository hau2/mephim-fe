import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TheaterServiceService} from '../../../services/theater-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit, OnChanges {
  @Input() movieId: number;
  @Input() showDateId: number;
  showTimeList: any = [];
  constructor(private theaterService: TheaterServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getListShowTime();
  }

  getListShowTime = () => {
    this.theaterService.findShowTimeByShowDate(this.movieId, this.showDateId).subscribe((res) => {
      console.log('---res: ', res);
      this.showTimeList = res.data;
    });
  }

  chooseSeat = (showTimeWrapper: any) => {
    const showDateId = showTimeWrapper.showDateId.showDateId;
    const showDate = showTimeWrapper.showDateId.date;
    const showTimeId = showTimeWrapper.showTime.showTimeId;
    const showTime = showTimeWrapper.showTime.time;
    const roomId = showTimeWrapper.room.roomId;
    const roomName = showTimeWrapper.room.roomName;
    const ticketId = showTimeWrapper.ticket.ticketId;
    const ticketPrice = showTimeWrapper.ticket.ticketPrice;
    this.router.navigate(
      ['/choose-seat' , {showDateId, showDate, showTimeId, showTime, roomId, roomName, ticketId, ticketPrice}]
    );
  }

}
