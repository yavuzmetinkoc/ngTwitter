import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tweet } from '../types/tweet.type';
import { TweetInterface } from '../interfaces/tweet.interface';
import {} from '../interfaces/tweet.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tweets: Tweet[] = [];
  pagedTweets: Tweet[] = [];
  tweetsPerPage: number;
  currentPage: number;
  tableTitles = [
    'Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'
  ];

  constructor(private tweetService: TweetInterface) { }

  ngOnInit() {
    this.tweetsPerPage = this.tweetService.tweetsPerPage;
    this.tweetService.tweets$.subscribe(
      tweets => { this.tweets = tweets; this.generateDisplayRange(); },
      error => { console.log('table subscribe tweets$ error', error); }
    );
    this.tweetService.currentPage$.subscribe(
      currentPage => {
        this.currentPage = currentPage;
        this.generateDisplayRange();
      },
      error => { console.log('subscribing current page error in table', error); }
    );
  }

  generateDisplayRange() {
    const { tweetsPerPage, currentPage, tweets } = this;
    if (tweets.length === 0) { return; }
    const start = tweetsPerPage * (currentPage - 1);
    const end = currentPage * tweetsPerPage;
    this.pagedTweets = tweets.slice(start, end);
  }

}
