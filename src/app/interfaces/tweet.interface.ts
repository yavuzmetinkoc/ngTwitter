import { Observable } from 'rxjs';
import { Tweet } from '../types/tweet.type';

export abstract class TweetInterface {
  abstract tweetsPerPage: number;
  abstract getTweets$(): Observable<Tweet[]>;
  abstract getTweetAmount$(): Observable<number>;
  abstract getCurrentPage$(): Observable<number>;
  abstract handleChangePage(page: number): void;
  abstract fetchTweets(params): void;
  abstract onKey(): void;
  abstract resetTweetStore(): void;
}
