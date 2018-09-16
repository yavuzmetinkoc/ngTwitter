import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Tweet } from './interfaces/tweet';

const proto = 'https://am-twitter-scrape.herokuapp.com';

@Injectable({ providedIn: 'root' })
export class TweetService {

  constructor(private http: HttpClient) { }

  fetchTweets({
    apiType,
    keyword
  }): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${proto}/${apiType}/${keyword}?pages_limit=3&wait=0`)
      .pipe(
        map(res => res),
        catchError(this.handleError('fetchTweets', []))
      );
  }

  handleError<T>(operators: string, result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
