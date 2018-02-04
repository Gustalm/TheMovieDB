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
  genres: any[] = [];
  genreId: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies({});
    this.getGenres();
  }

  getGenres(){
    this.resetPagination();
    this.movieService.getGenres().subscribe(data  => {
      this.genres = data['genres'].map(genres => {return genres});
    });
  }

  getMovies(paramObject: any = {}){
    if(this.genreId)
      paramObject["with_genres"] = this.genreId;

    this.movieService.getMovies(paramObject).subscribe(data  => {
      this.totalPages = data['total_pages'];
      this.totalResults = data['total_results'];
      this.movies = data['results'].map(item => {
        return new Movie(item);
      })
    });
  }

  onChangeGenre(param: any){
    this.getMovies()
  }

  onChangePage(numberPage: number){
    this.currentPage = numberPage;
    this.getMovies({ page: numberPage });
  }

  resetPagination(){
    this.currentPage = 1;
  }
}
