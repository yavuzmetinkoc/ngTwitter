import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TweetInterface } from '../interfaces/tweet.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  tweetAmount: number;
  currentPage: number;

  pages: number[] = [];
  currentPath: string;

  constructor(
    public tweetService: TweetInterface,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      ({ path }) => { this.currentPath = path; },
      error => { console.log('get current path error', error); }
    );
    this.tweetService.getCurrentPage$().subscribe(
      currentPage => { this.currentPage = currentPage; }
    );
    this.tweetService.getTweetAmount$().subscribe(
      tweetAmount => {
        this.tweetAmount = tweetAmount;
        this.generatePageArray(tweetAmount, this.tweetService.tweetsPerPage);
      },
      error => { console.log('get tweet amount error', error); }
    );
  }

  generatePageArray(tweetAmount, tweetsPerPage) {
    const pages = [];
    if (tweetAmount === 0) {
      this.pages = pages;
      return;
    }
    const totalPageAmount = Math.ceil(tweetAmount / tweetsPerPage);
    for (let i = 1; i <= totalPageAmount; i += 1) {
      pages.push(i);
    }
    this.pages = pages;
  }

  handleChangePage(e) {
    this.tweetService.handleChangePage(parseInt(e.target.text, 10));
  }
}
