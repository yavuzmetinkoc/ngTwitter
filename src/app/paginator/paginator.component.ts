import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginatorInterface } from '../interfaces/paginator.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  tweetAmount$: Observable<number> = this.tweetService.tweetAmount$;
  tweetAmount: number;

  constructor(private tweetService: PaginatorInterface) { }

  ngOnInit() {
    this.tweetAmount$.subscribe(
      tweetAmount => { this.tweetAmount = tweetAmount; },
      error => { console.log('get tweet amount error', error); }
    );
  }

}
