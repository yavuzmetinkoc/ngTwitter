import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { TweetInterface } from '../interfaces/tweet.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  tweetAmount$: Observable<number> = this.tweetService.tweetAmount$;
  tweetAmount: number;

  currentPage$: Observable<number> = this.tweetService.currentPage$;
  currentPage: number;

  totalPageAmount: number;
  pages: number[] = [];
  currentPath: string;

  constructor(
    private tweetService: TweetInterface,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      ({ path }) => { this.currentPath = path; },
      error => { console.log('get current path error', error); }
    );
    this.currentPage$.subscribe(
      currentPage => { this.currentPage = currentPage; }
    );
    this.tweetAmount$.subscribe(
      tweetAmount => {
        this.tweetAmount = tweetAmount;
        this.generatePageArray(tweetAmount);
      },
      error => { console.log('get tweet amount error', error); }
    );
  }

  generatePageArray(tweetAmount) {
    const pages = [];
    if (tweetAmount === 0) {
      this.pages = pages;
      return;
    }
    const totalPageAmount = Math.ceil(tweetAmount / this.tweetService.tweetsPerPage);
    for (let i = 1; i <= totalPageAmount; i += 1) {
      pages.push(i);
    }
    this.pages = pages;
  }

  handleChangePage(e) {
    this.tweetService.handleChangePage(parseInt(e.target.text, 10));
  }
}
