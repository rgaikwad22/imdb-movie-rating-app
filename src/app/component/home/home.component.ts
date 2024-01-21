import { Component, OnInit } from '@angular/core';
import { MovietypeService } from 'src/app/service/movietype.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesUrl: any = 'https://image.tmdb.org/t/p/original/';
  popularMovies: any = [];
  movies: any;

  constructor(private movieService: MovietypeService) { }

  ngOnInit(): void {
    this.movieService.getMovieType('popular').subscribe((data) => {
      this.movies = data.results;
    });
  }
}
