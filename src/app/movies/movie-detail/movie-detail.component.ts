import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from "@angular/router";
import { MovieService } from '../movie-service.service';
import { Movie } from '../models/movie.model';
import { MovieDetail } from '../models/movie-detail.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: MovieDetail = new MovieDetail({});;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((data: Params) => {

      this.movieService.getMovie(+data['id']).subscribe(data => {
        this.movieDetail = new MovieDetail(data);
      });
    })
  }

  ngOnInit() {
  }

  getBackgroundImage(){
    return this.movieDetail.belongsToCollection['backdrop_path'];
  }

}
