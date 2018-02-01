import { Movie } from "./movie.model";
import { Cast } from "./cast.model";
import { Keyword } from "./keyword.model";
import { Video } from "./video.model";

export class MovieDetail extends Movie{
    belongsToCollection: any[] = [];
    budget: number;
    homepage: string;
    imbdbId: number;
    productionCompanies: any[] = [];
    productionCountries: any[] = [];
    revenue: number;
    runtime: number;
    spokenLanguages: any[];
    status: string;
    tagline: string;
    mainCast: Cast[] = [];
    keywords: Keyword[] = [];
    videos: Video[] = [];
    crew: any[] = []; //gotta hurry.
    recommendations: any[] = [];

    constructor(data: any){
        super(data);
        this.belongsToCollection = data['belongs_to_collection'];
        this.budget = data['budget'];
        this.homepage = data['homepage'];
        this.imbdbId = data['imdb_id'];
        this.productionCompanies = data['production_companies'];
        this.productionCountries = data['production_countries'];
        this.revenue = data['revenue'];
        this.runtime = data['runtime'];
        this.spokenLanguages = data['spoken_languages'];
        this.status = data['status'];
        this.tagline = data['tagline'];
        this.mainCast = data['credits'] ? data['credits']['cast'] :[] ;
        this.keywords = data['keywords'] ? data['keywords']['keywords'] : [] ;
        this.videos = data['videos'] ? data['videos'] : [] ;
        this.crew = data['credits']? data['credits']['crew'] : [] ;
        this.recommendations = data['recommendations'] ? data['recommendations']['results'] : [] ;
    }
}