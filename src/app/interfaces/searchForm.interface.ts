import { Observable } from 'rxjs';
import { Tweet } from './tweet.interface';

export abstract class SearchFormInterface {
  abstract fetchTweets(params): void;
  abstract onKey(): void;
}
