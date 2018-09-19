import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TableComponent } from './table.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { TweetInterface } from '../interfaces/tweet.interface';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  const mockData = require('./mockData.json');
  const mockTweetService = {
    tweetsPerPage: 3,
    getTweets$: () => (of(mockData)),
    getCurrentPage$: () => of(2),
    getTweetAmount$: () => of(9)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent, PaginatorComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: TweetInterface, useValue: mockTweetService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a tweets array with 3 elements', () => {
    component.generateDisplayRange(mockData);
    console.log('component', component);
    expect(component.pagedTweets.length).toBe(3);
    expect(component.pagedTweets[0]).toEqual({
      account: {
        fullname: 'Daily Squib News',
        href: '/DAILYSQUIB',
        id: 9707572
      },
      date: 'Sep 17, 2018',
      hashtags: '#epicaawards #epica',
      likes: '1',
      replies: '-',
      retweets: '-',
      text: 'Epica Awards Maestro Mark Tungate – An Interview W...'
    });
    expect(component.pagedTweets[2]).toEqual({
      account: {
        fullname: 'Brendan Davis', href: '/brendndavis', id: 85155764
      },
      date: 'Sep 16, 2018',
      hashtags: '#epica #theultimateprincipletour',
      likes: '-',
      replies: '-',
      retweets: '-',
      text: '#epica - #theultimateprincipletour at #markthalle ...'
    });
  });

  it('should generate an empty tweets array: []', () => {
    component.generateDisplayRange([]);
    expect(component.pagedTweets).toEqual([]);
  });

  it('shoudl return a well formatted tweet', () => {
    const formattedTweet = {
      account: {
        fullname: '𝔥',
        href: '/hulyabeslii',
        id: 4865634003
      },
      date: 'Sep 16, 2018',
      hashtags: ['#Epica'],
      likes: '1',
      replies: '-',
      retweets: '-',
      text: `I've tried to peer into the core, But could not st...`
    };
    expect(component.handleTweetFormat(mockData[4])).toEqual(formattedTweet);
  });

});
