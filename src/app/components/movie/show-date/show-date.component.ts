import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TheaterServiceService} from '../../../services/theater-service.service';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss']
})
export class ShowDateComponent implements OnInit, OnChanges {
  @Input() theaterId: number;
  listShowDate: any = [];
  showDateIdChoose: number;
  listMovie: any = [];
  constructor(private theaterService: TheaterServiceService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.getListShowDate();
  }

  getListShowDate = () => {
    if (this.theaterId) {
      this.theaterService.findShowDateByTheater(this.theaterId).subscribe((res) => {
        this.listShowDate = res.data;
      });
    }
  }

  onChooseShowDate = (showDateId: number) => {
    this.showDateIdChoose = showDateId;
  }

  getListMovieByShowDate = (showDateId: number) => {
    this.theaterService.findMovieTicketByShowDate(showDateId).subscribe((res) => {
      this.listMovie = res.data;
    });
  }


}
