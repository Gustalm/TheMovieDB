import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    var aox = {};
    this.movieService.getMovies().subscribe(data  => {
      this.movies = data['results'].map(item => {
        return new Movie(item);
      })
    });
  }
}
