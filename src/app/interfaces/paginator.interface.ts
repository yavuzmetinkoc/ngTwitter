import { Observable } from 'rxjs';

export abstract class PaginatorInterface {
  abstract tweetAmount$: Observable<number>;
}
