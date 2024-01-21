import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovietypeService } from 'src/app/service/movietype.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  movies: any;
  moviesUrl: any = 'https://image.tmdb.org/t/p/original/';
  // movieType: any;
  @Input() movieType: any;

  constructor(private route: ActivatedRoute, private movieService: MovietypeService) {
  }
  
  ngOnChanges () {
    this.fetchMovies()
  }

  ngOnInit() {
    // Initial fetch based on the route parameter

    // Subscribe to changes in the route parameters
  }

  private fetchMovies() {
    this.movieService.getMovieType(this.movieType ? this.movieType : 'popular').subscribe((data) => {
      this.movies = data.results;
    });
  }
}
