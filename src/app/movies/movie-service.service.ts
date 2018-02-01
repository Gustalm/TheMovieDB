import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Movie } from './models/movie.model';
import { Observable } from 'rxjs/Observable';
import { MovieDetail } from './models/movie-detail.model';
@Injectable()
export class MovieService {
  private urlBase = 'https://api.themoviedb.org/3/';
  private apiKey = '0db8a6622b8920b82816a4171cfe5901';

  constructor(private http: HttpClient) {

  }

  getMovies(): Observable<any> {
    return this.http.get(this.getApiUrl("discover/movie"));
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(this.getApiUrl("movie/" + id.toString()));
  }

  private getApiUrl(method: string){
    return this.urlBase + method + "?api_key=" + this.apiKey + "&language=pt-BR&append_to_response=videos,images,keywords,recommendations,credits,collection";
  }
}
