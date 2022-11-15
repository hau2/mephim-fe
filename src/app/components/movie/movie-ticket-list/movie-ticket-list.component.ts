import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TheaterServiceService} from '../../../services/theater-service.service';

@Component({
  selector: 'app-movie-ticket-list',
  templateUrl: './movie-ticket-list.component.html',
  styleUrls: ['./movie-ticket-list.component.scss']
})
export class MovieTicketListComponent implements OnInit, OnChanges {
  @Input() showDateId: number;
  listMovie: any = [];
  constructor(private theaterService: TheaterServiceService) { }

  ngOnInit(): void {
  }

  getListMovie = () => {
    if (this.showDateId) {
      this.theaterService.findMovieTicketByShowDate(this.showDateId).subscribe((res) => {
        console.log('--DATA: ', res);
        this.listMovie = res.data.movieId || [];
        console.log(this.listMovie);
      });
    }
  }

  ngOnChanges(): void {
    this.getListMovie();
  }

}
