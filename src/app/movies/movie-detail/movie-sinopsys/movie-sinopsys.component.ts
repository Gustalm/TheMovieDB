import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-sinopsys',
  templateUrl: './movie-sinopsys.component.html',
  styleUrls: ['./movie-sinopsys.component.css']
})
export class MovieSinopsysComponent implements OnInit {
  @Input() movieDetail: Movie;


  constructor() {
   }

  ngOnInit() {
    
  }

}
