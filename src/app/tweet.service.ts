import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { Tweet } from './interfaces/tweet.interface';
import { SearchFormInterface } from './interfaces/searchForm.interface';

const proto = 'https://am-twitter-scrape.herokuapp.com';

@Injectable()
export class TweetService implements SearchFormInterface {

  private tweetStore$: BehaviorSubject<Tweet[]> = new BehaviorSubject([]);
  tweets$: Observable<Tweet[]> = this.tweetStore$;

  constructor(private http: HttpClient) { }

  fetchTweets({
    apiType,
    keyword
  }): void {
    console.log('***** fetch tweets from app.service.ts *****', apiType, keyword);
    this.http.get<Tweet[]>(`${proto}/${apiType}/${keyword}?pages_limit=3&wait=0`)
      .subscribe(
        res => { this.tweetStore$.next(res); },
        error => {
          console.log('fetchTweets error', error);
          this.tweetStore$.next([]);
        }
      );
  }

  onKey() {}
}
