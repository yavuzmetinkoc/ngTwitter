import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tweet } from '../interfaces/_tweet.interface';
import { TweetInterface } from '../interfaces/tweet.interface';
import {} from '../interfaces/tweet.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tweets$: Observable<Tweet>;
  tweets: Tweet[] = [];
  tableTitles = [
    'Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'
  ];

  constructor(private tweetService: TweetInterface) { }

  ngOnInit() {
    this.tweetService.tweets$.subscribe(
      tweets => { this.tweets = tweets; },
      error => { console.log('table subscribe tweets$ error', error); }
    );
  }

}
