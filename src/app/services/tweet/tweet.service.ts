import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Tweet } from '../../types/tweet.type';
import { TweetInterface } from '../../interfaces/tweet.interface';

const proto = 'https://am-twitter-scrape.herokuapp.com';

@Injectable()
export class TweetService implements TweetInterface {

  private tweetStore$: BehaviorSubject<Tweet[]> = new BehaviorSubject([]);

  private tweetAmountStore$: BehaviorSubject<number> = new BehaviorSubject(0);

  private currentPageStore$: BehaviorSubject<number> = new BehaviorSubject(1);

  tweetsPerPage = 10;

  constructor(private http: HttpClient) { }

  fetchTweets({
    apiType,
    keyword
  }): void {
    if (keyword === '') {
      this.tweetStore$.next([]);
      return;
    }
    this.http.get<Tweet[]>(`${proto}/${apiType}/${keyword}?pages_limit=3&wait=0`)
      .subscribe(
        res => {
          this.tweetStore$.next(res);
          this.tweetAmountStore$.next(res.length);
        },
        error => {
          console.log('fetchTweets error', error);
          this.tweetStore$.next([]);
        }
      );
  }

  handleChangePage(nextPage: number) {
    this.currentPageStore$.next(nextPage);
  }

  resetTweetStore() {
    this.tweetStore$.next([]);
    this.tweetAmountStore$.next(0);
    this.currentPageStore$.next(1);
  }

  getCurrentPage$() { return this.currentPageStore$; }

  getTweetAmount$() { return this.tweetAmountStore$; }

  getTweets$() { return this.tweetStore$; }

  onKey() {}
}
