import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tweet, FormattedTweet } from '../types/tweet.type';
import { TweetInterface } from '../interfaces/tweet.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tweets: Tweet[] = [];
  pagedTweets: FormattedTweet[] = [];
  tweetsPerPage: number;
  currentPage: number;
  tableTitles = [
    'Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'
  ];

  constructor(private tweetService: TweetInterface) { }

  ngOnInit() {
    this.tweetsPerPage = this.tweetService.tweetsPerPage;
    this.tweetService.getTweets$().subscribe(
      tweets => {
        this.tweets = tweets;
        this.generateDisplayRange(tweets);
      },
      error => { console.log('table subscribe tweets$ error', error); }
    );
    this.tweetService.getCurrentPage$().subscribe(
      currentPage => {
        this.currentPage = currentPage;
        this.generateDisplayRange(this.tweets);
      },
      error => { console.log('subscribing current page error in table', error); }
    );
  }

  generateDisplayRange(tweets) {
    this.pagedTweets = [];
    const { tweetsPerPage, currentPage } = this;
    if (tweets.length === 0) { return; }
    const start = tweetsPerPage * (currentPage - 1);
    const end = currentPage * tweetsPerPage;
    this.pagedTweets = tweets.slice(start, end).map(tweet => (this.handleTweetFormat(tweet)));
  }

  handleTweetFormat(tweet) {

    const copyTweet = Object.assign({}, tweet);

    const hyphenIndex: number = copyTweet.date && copyTweet.date.indexOf('- ');

    if (copyTweet.text && copyTweet.text.length > 50) {
      copyTweet.text = `${copyTweet.text.slice(0, 50)}...`;
    }

    if (copyTweet.hashtags && copyTweet.hashtags.length > 2) {
      copyTweet.hashtags = copyTweet.hashtags.slice(0, 2).join(' ');
    }

    if (hyphenIndex !== -1) {
      const _date = copyTweet.date.slice(hyphenIndex + 2 - copyTweet.date.length).split(' ');
      const ele = _date.splice(2, 1);
      copyTweet.date = `${_date.reverse().join(' ')}, ${ele[0]}`;
    }

    copyTweet.likes = copyTweet.likes > 0 ? copyTweet.likes.toString() : '-';
    copyTweet.replies = copyTweet.replies > 0 ? copyTweet.replies.toString() : '-';
    copyTweet.retweets = copyTweet.retweets > 0 ? copyTweet.retweets.toString() : '-';

    return copyTweet;
  }

}
