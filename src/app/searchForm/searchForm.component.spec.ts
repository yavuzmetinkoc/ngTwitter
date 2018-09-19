import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';

import { SearchFormComponent } from './searchForm.component';
import { TableComponent } from '../table/table.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { TweetInterface } from '../interfaces/tweet.interface';
import {
  USER_SEARCH,
  USER_SEARCH_URL,
  USERS
} from '../constants';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  const mockTweetService = {
    resetTweetStore: () => {},
    fetchTweets: () => {},
    getTweets$: () => of([]),
    getCurrentPage$: () => of(2)
  };

  const mockRoute = {
    data: of({
      formTitle: USER_SEARCH,
      apiType: USERS,
      path: USER_SEARCH_URL
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent, TableComponent, PaginatorComponent ],
      imports: [ RouterTestingModule, FontAwesomeModule ],
      providers: [
        { provide: TweetInterface, useValue: mockTweetService },
        { provide: ActivatedRoute, useValue: mockRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title: ${USER_SEARCH}`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelectorAll('label')[0].textContent;
    expect(title).toBe(USER_SEARCH);
  });

  it('shoudl handle keyin "Sansa"', () => {
    const event = {
      target: { value: 'sansa'}
    };
    component.onKey(event);
    expect(component.keyword).toBe('sansa');
  });

  it('should handle fetchTweets() when click the search button', () => {
    const spy = spyOn(component, 'fetchTweets');
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[0];
    button.click();
    expect(spy).toHaveBeenCalled();
  });

});
