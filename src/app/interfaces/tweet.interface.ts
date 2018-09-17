import { Observable } from 'rxjs';
import { Tweet } from './_tweet.interface';

export abstract class TweetInterface {
  abstract tweetsPerPage: number;
  abstract tweets$: Observable<Tweet[]>;
  abstract tweetAmount$: Observable<number>;
  abstract currentPage$: Observable<number>;
  abstract handleChangePage(page: number): void;
  abstract fetchTweets(params): void;
  abstract onKey(): void;
  abstract resetTweetStore(): void;
}
