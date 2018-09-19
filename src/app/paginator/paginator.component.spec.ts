import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';

import { PaginatorComponent } from './paginator.component';
import { TweetInterface } from '../interfaces/tweet.interface';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  const tweetService = {
    getCurrentPage$: () => of(5),
    tweetAmount$: of(47),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: TweetInterface, useValue: tweetService }
      ]
    });
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('component should subscribe current page', async(() => {
    component.tweetService.getCurrentPage$().subscribe(
      currentPage => {
        expect(currentPage).toBe(5);
      }
    );
    component.tweetService.getTweetAmount$().subscribe(
      tweetAmount => { expect(tweetAmount).toBe(47); }
    );
  }));

});
