import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/:type', component: MovieListComponent},
  {path: 'movie/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
