import { Component } from '@angular/core';
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

export class NavigatorComponent {
  navs = [
    {
      url: HASH_TAG_SEARCH_URL,
      title: HASH_TAG_SEARCH
    }, {
      url: USER_SEARCH_URL,
      title: USER_SEARCH
    }
  ];
}
