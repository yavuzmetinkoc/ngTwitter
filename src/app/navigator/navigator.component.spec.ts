import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigatorComponent } from './navigator.component';

import {
  HASH_TAG_SEARCH_URL,
  USER_SEARCH_URL
} from '../constants';

describe('NavigatorComponent', () => {
  let component: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigatorComponent
      ],
      imports: [RouterTestingModule.withRoutes([
        { path: HASH_TAG_SEARCH_URL, component: NavigatorComponent},
        { path: USER_SEARCH_URL, component: NavigatorComponent}
      ])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Navigators', async(() => {
    const navigators = fixture.debugElement.componentInstance;
    expect(navigators).toBeTruthy();
  }));

  it(`should include 2 navs direct to /hashtag_search and /user_search`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const navs = compiled.querySelectorAll('a');
    expect(navs.length).toEqual(2);
    expect(navs[0].pathname).toEqual('/hashtag_search');
    expect(navs[1].pathname).toEqual('/user_search');
  }));

  it('shuld change the link state after click', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const navs = compiled.querySelectorAll('a');
    navs[1].click();
    setTimeout(() => {
      expect(component.navs[1].isActived).toBe(true);
    }, 100);
  }));

});
