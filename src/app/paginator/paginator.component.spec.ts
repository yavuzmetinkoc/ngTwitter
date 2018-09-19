import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PaginatorComponent } from './paginator.component';
import { TweetInterface } from '../interfaces/tweet.interface';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  const mockTweetService = {
    getCurrentPage$: () => of(5),
    getTweetAmount$: () => of(47)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: TweetInterface, useValue: mockTweetService }
      ]
    });

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component should subscribe current page', async(() => {
    component.tweetService.getCurrentPage$().subscribe(
      currentPage => {
        expect(currentPage).toBe(5);
      }
    );
  }));

  it('should subscribe tweet amount', () => {
    component.tweetService.getTweetAmount$().subscribe(
      tweetAmount => { expect(tweetAmount).toBe(47); }
    );
  });

  it('should generate page array by 47 tweets and 10 tweets per page', () => {
    component.generatePageArray(47, 10);
    expect(component.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('should generate page array by 34 tweets and 15 tweets per page', () => {
    component.generatePageArray(34, 15);
    expect(component.pages).toEqual([1, 2, 3]);
  });

});
