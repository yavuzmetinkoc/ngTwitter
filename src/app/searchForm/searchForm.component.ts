import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TweetService } from '../tweet.service';
import { Tweet } from '../interfaces/tweet';
import { HASH_TAGS } from '../constants/index';

@Component({
  selector: 'app-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})

export class SearchFormComponent implements OnInit {

  formTitle: string;
  apiType = HASH_TAGS;
  keyword = '';
  tweets: Tweet[] = [];
  tableTitles = [
    'Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'
  ];

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetService
  ) {}

  ngOnInit() {
      this.route.data.subscribe(
        ({ formTitle, apiType }) => {
          this.formTitle = formTitle;
          this.apiType = apiType;
        }
      );
  }

  fetchTweets(): void {
    const { apiType, keyword } = this;
    if (keyword === '') {
      this.tweets = [];
      return;
    }
    this.tweetService.fetchTweets({
      apiType,
      keyword
    })
      .subscribe((res: Tweet[]) => {
        console.log('res', res);
        this.tweets = res;
      });
  }

  onKey(event: any): void {
    this.keyword = event.target.value;
  }
}
