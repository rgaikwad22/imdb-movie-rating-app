import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovietypeService } from 'src/app/service/movietype.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movieId: any;
  moviebyid: any = [];
  moviesUrl: any = 'https://image.tmdb.org/t/p/original'
  constructor (private route: ActivatedRoute, private movieService: MovietypeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      this.loadMovieById();
    });
  }

  loadMovieById() {
    this.movieService.getMovieDetailById(this.movieId).subscribe((data) => {
      this.moviebyid = data;
      console.log(this.moviebyid);
    });
  }
}
