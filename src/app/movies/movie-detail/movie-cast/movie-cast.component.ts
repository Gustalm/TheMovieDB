import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast.model';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css']
})
export class MovieCastComponent implements OnInit {
  @Input() cast: Cast[]; 
  @Input() movieId: number;
  constructor() {

   }

  ngOnInit() {
  }

}
