import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigatorComponent } from './navigator.component';

describe('NavigatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigatorComponent
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  it('should create Navigators', async(() => {
    const fixture = TestBed.createComponent(NavigatorComponent);
    const navigators = fixture.debugElement.componentInstance;
    expect(navigators).toBeTruthy();
  }));

  it(`should include 2 navs direct to /hashtag_search and /user_search`, async(() => {
    const fixture = TestBed.createComponent(NavigatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const navs = compiled.querySelectorAll('a');
    expect(navs.length).toEqual(2);
    expect(navs[0].pathname).toEqual('/hashtag_search');
    expect(navs[1].pathname).toEqual('/user_search');
  }));
});
