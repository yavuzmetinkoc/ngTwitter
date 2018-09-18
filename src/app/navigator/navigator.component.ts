import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import {
  HASH_TAG_SEARCH,
  USER_SEARCH,
  HASH_TAG_SEARCH_URL,
  USER_SEARCH_URL
} from '../constants';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})

export class NavigatorComponent implements OnInit {

  constructor(private router: Router) { }
  navs = [
    {
      url: HASH_TAG_SEARCH_URL,
      title: HASH_TAG_SEARCH,
      isActived: false
    }, {
      url: USER_SEARCH_URL,
      title: USER_SEARCH,
      isActived: false
    }
  ];

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const { navs } = this;
        this.navs = navs.map(nav => {
          if (`/${nav.url}` === data.urlAfterRedirects) {
            nav.isActived = true;
          } else {
            nav.isActived = false;
          }
          return nav;
        });
      }
    });
  }
}
