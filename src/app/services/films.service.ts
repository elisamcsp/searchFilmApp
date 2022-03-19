import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  url = "http://www.omdbapi.com/";
  apiKey = "dfa44aff";

  constructor(private http: HttpClient) { }

  searchMovie(title: string): Observable<any>{

      return this.http.get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(map(results => results['Search']));

  };

  getDetail(id: string): Observable<any>{

      return this.http.get(`${this.url}?apikey=${this.apiKey}&i=${encodeURI(id)}`).pipe(map((results) => results));
    
  };

  testOperation () { 
    console.log("Executing test operation...");
  }
}
