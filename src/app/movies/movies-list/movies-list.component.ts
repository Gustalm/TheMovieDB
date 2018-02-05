import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie } from '../models/movie.model';
import { Pagination } from '../models/pagination.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  loading: boolean = false;
  pagination: Pagination;
  movies: Movie[] = [];
  genres: any[] = [];
  genreId: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies({});
    this.getGenres();
  }

  getGenres(){
    this.movieService.getGenres().subscribe(data  => {
      this.genres = data['genres'].map(genres => {return genres});
    });
  }

  getMovies(paramObject: any = {}){
    this.loading = true;
    if(+this.genreId)
      paramObject["with_genres"] = this.genreId;

    this.movieService.getMovies(paramObject).subscribe(data  => {
      this.pagination = new Pagination(data);
      this.movies = data['results'].map(item => {
        this.loading = false;
        return new Movie(item);
      })
    });
  }

  onChangeGenre(param: any){
    this.getMovies()
  }

  onChangePage(pagination: Pagination){
    debugger;
    this.getMovies({ page: pagination.page });
    window.scrollTo(0, 0);
  }

  // resetPagination(){
  //   this.currentPage = 1;
  // }
}
