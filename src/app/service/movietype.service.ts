import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovietypeService {
  private apiKey = '73455a6a694084b7cc947dd5ae9750c3';
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getMovieType(type: string): Observable<any> {
    const endpoint = `/movie/${type}`;
    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get(`${this.apiUrl}${endpoint}`, { params });
  }

  getMovieDetailById (id: number) {
    const endpoint = `/movie/${id}`;
    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get(`${this.apiUrl}${endpoint}`, { params });
  }
}