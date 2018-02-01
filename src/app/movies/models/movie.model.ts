export class Movie {
    adult: boolean;
    backdropPath: string;
    genreIds: number[] = [];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
    releaseYear: string;

    constructor(data: any){
        this.adult = data['adult'];
        this.id = data['id'];
        this.backdropPath = data['backdrop_path'];
        this.genreIds = data['genre_ids'];
        this.originalLanguage = data['original_language'];
        this.originalTitle = data['original_title'];
        this.overview = data['overview'];
        this.popularity = data['popularity'];
        this.posterPath = data['poster_path'];
        this.releaseDate = data['release_date'];
        this.title = data['title'];
        this.video = data['video'];
        this.voteAverage = data['vote_average'];
        this.voteCount = data['vote_count'];
        this.releaseYear = this.releaseDate ? this.releaseDate.split('-')[0] : '-';
    }
}