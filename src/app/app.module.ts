import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieCardComponent } from './movies/movies-list/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movies/movie-service.service';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { MovieSinopsysComponent } from './movies/movie-detail/movie-sinopsys/movie-sinopsys.component';
import { MovieCastComponent } from './movies/movie-detail/movie-cast/movie-cast.component';
import { MoviesPaginationComponent } from './movies/movies-list/movies-pagination/movies-pagination.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieCardComponent,
    MovieSinopsysComponent,
    MovieCastComponent,
    MoviesPaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LoadingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
