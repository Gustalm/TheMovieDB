import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number;
  totalResults: number;
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies({});
  }

  getMovies(paramObject: any){
    var aox = {};
    this.movieService.getMovies(paramObject).subscribe(data  => {
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
      this.movies = data['results'].map(item => {
        return new Movie(item);
      })
    });
  }

  onChangeGenre(param: any){
    debugger;
    this.getMovies({with_genres: param})
  }
}
