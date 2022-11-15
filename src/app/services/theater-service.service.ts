import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheaterServiceService {
  private API_URL_LIST_THEATER = 'http://localhost:9090/api/theater/list-theater';
  private API_URL_FIND_ALL_SHOW_DATE = 'http://localhost:9090/api/movie/find-show-date-by-theater';
  private API_URL_FIND_MOVIE_TICKET_BY_SHOW_DATE = 'http://localhost:9090/api/movie/find-movie-by-show-date';
  private API_URL_FIND_SHOW_TIME_BY_SHOW_DATE = 'http://localhost:9090/api/movie/find-show-time-by-show-date';
  private API_URL_FIND_SEAT_BOOKING = 'http://localhost:9090/api/seat/find';

  constructor(private httpClient: HttpClient) {
  }

  findAllTheater(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_LIST_THEATER);
  }

  findShowDateByTheater(theaterId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL_FIND_ALL_SHOW_DATE}?theaterId=${theaterId}`);
  }

  findMovieTicketByShowDate(showDateId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL_FIND_MOVIE_TICKET_BY_SHOW_DATE}?showDateId=${showDateId}`);
  }

  findShowTimeByShowDate(movieId: number, showDateId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL_FIND_SHOW_TIME_BY_SHOW_DATE}?movieId=${movieId}&showDateId=${showDateId}`);
  }

  findSeatToBooking(showDateId: number, showTimeId: number, ticketId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL_FIND_SEAT_BOOKING}?showDateId=${showDateId}&showTimeId=${showTimeId}&ticketId=${ticketId}`);
  }
}
