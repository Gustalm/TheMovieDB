import { Routes, RouterModule, PreloadAllModules, } from "@angular/router";
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";
import { NgModule } from "@angular/core";
// import { AuthGuard } from "app/auth/auth-guard.service";
// import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";

const AppRoutes: Routes = [
    { path: '', component: MoviesListComponent },
    { path: 'movies/:id', component: MovieDetailComponent},
    { path: "**", redirectTo:"/"}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}