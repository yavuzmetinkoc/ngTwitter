import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TweetService } from './tweet.service';

describe('TweetService', () => {

  let service: TweetService;
  let mockHttpClient: HttpTestingController;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          TweetService
        ]
      });
      service = TestBed.get(TweetService);
      mockHttpClient = TestBed.get(HttpTestingController);
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle getCurrentPage$', () => {
    service.getCurrentPage$().subscribe(
      currentPage => { expect(currentPage).toBe(1); }
    );
  });

  it('should handle getTweetAmount$', () => {
    service.getTweetAmount$().subscribe(
      amout => { expect(amout).toBe(0); }
    );
  });

  it('should handle getTweets$', () => {
    service.getTweets$().subscribe(
      tweets => { expect(tweets).toEqual([]); }
    );
  });

  it('should change the page in store', () => {
    service.handleChangePage(5);
    service.getCurrentPage$().subscribe(
      page => { expect(page).toBe(5); }
    );
  });

  it('should reset the store to default', () => {
    service.resetTweetStore();
    service.getTweets$().subscribe(
      tweets => { expect(tweets).toEqual([]); }
    );
    service.getTweetAmount$().subscribe(
      amout => { expect(amout).toBe(0); }
    );
    service.getCurrentPage$().subscribe(
      currentPage => { expect(currentPage).toBe(1); }
    );
  });

  it('should fetch tweets and set it into store', () => {
    /** act */
    const expectedTweets = [
      {
        'account': {
          'fullname': 'sansa',
          'href': '/sansa',
          'id': 14430503
        },
        'date': '1:29 AM - 18 Apr 2008',
        'hashtags': [],
        'likes': 1,
        'replies': 0,
        'retweets': 1,
        'text': 'sansa'
      }
    ];

    service.fetchTweets({
      apiType: 'users',
      keyword: 'sansa'
    });

    /** arrange */
    const mockResponse = expectedTweets;

    mockHttpClient.expectOne({
      url: 'https://am-twitter-scrape.herokuapp.com/users/sansa?pages_limit=3&wait=0',
      method: 'GET'
    }).flush(mockResponse);

    service.getTweets$().subscribe(res => {
      expect(res).toEqual(expectedTweets);
    });

  });


  afterEach(() => {
    mockHttpClient.verify();
  });

});
