// movie-list.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovietypeService } from 'src/app/service/movietype.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: any;
  movieType: any;
  @Output() movieTypeChange = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private movieService: MovietypeService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieType = params.get('type');
      this.loadMovies();
    });
  }

  loadMovies() {
    this.movieService.getMovieType(this.movieType ? this.movieType : 'popular').subscribe((data) => {
      this.movies = data.results;
      // Notify the child component about the movieType change
      this.movieTypeChange.emit(this.movieType);
    });
  }
}
