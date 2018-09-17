import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tweet } from '../interfaces/tweet.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tweets$: Observable<Tweet[]>;
  tweets: Tweet[] = [];
  tableTitles = [
    'Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'
  ];

  constructor() { }

  ngOnInit() {
    this.tweets$.subscribe(value => {
      this.tweets = value;
    });
  }

}
