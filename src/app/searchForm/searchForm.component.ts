import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { TweetInterface } from '../interfaces/tweet.interface';
import { HASH_TAGS } from '../constants/index';

@Component({
  selector: 'app-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})

export class SearchFormComponent implements OnInit {

  formTitle: string;
  apiType = HASH_TAGS;
  keyword = 'sansa';
  faSearch = faSearch;

  constructor(
    private route: ActivatedRoute,
    private tweetService: TweetInterface
  ) {}

  ngOnInit() {
      this.route.data.subscribe(
        ({ formTitle, apiType }) => {
          this.formTitle = formTitle;
          this.apiType = apiType;
        }
      );
      this.fetchTweets();
  }

  fetchTweets(): void {
    const { apiType, keyword } = this;
    this.tweetService.resetTweetStore();
    this.tweetService.fetchTweets({
      apiType,
      keyword
    });
  }

  onKey(event: any): void {
    this.keyword = event.target.value;
  }
}
