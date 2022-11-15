import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheaterServiceService {
  private API_URL = 'http://localhost:9090/api/theater/list-theater';

  constructor(private httpClient: HttpClient) { }

  findAllTheater(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL);
  }
}
