import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchFormInterface } from '../interfaces/searchForm.interface';
import { Tweet } from '../interfaces/tweet.interface';
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

  constructor(
    private route: ActivatedRoute,
    private tweetService: SearchFormInterface
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
    this.tweetService.fetchTweets({
      apiType,
      keyword
    });
  }

  onKey(event: any): void {
    this.keyword = event.target.value;
  }
}
