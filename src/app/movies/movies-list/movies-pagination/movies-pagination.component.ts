import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../models/pagination.model';

@Component({
  selector: 'app-movies-pagination',
  templateUrl: './movies-pagination.component.html',
  styleUrls: ['./movies-pagination.component.css']
})
export class MoviesPaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Output() onChangePage: EventEmitter<Pagination> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {

  }

  onChangePageClick(pageNumber: number){
    this.pagination.page = +pageNumber;
    this.onChangePage.emit(this.pagination);
  }
}
