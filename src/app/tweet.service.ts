import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const proto = 'https://am-twitter-scrape.herokuapp.com';

@Injectable({ providedIn: 'root' })
export class TweetService {

  constructor(private http: HttpClient) { }

  fetchTweets({
    apiType,
    keyword
  }) {
    return this.http.get(`${proto}/${apiType}/${keyword}?pages_limit=3&wait=0`);
  }
}
