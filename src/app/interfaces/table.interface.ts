import { Observable } from 'rxjs';
import { Tweet } from './tweet.interface';

export abstract class TableInterface {
  abstract tweets$: Observable<Tweet[]>;
}
