import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  HASH_TAG_SEARCH
} from '../constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})

export class SearchFormComponent implements OnInit {
  formTitle: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.data.subscribe(
        ({ formTitle }) => { this.formTitle = formTitle; }
      );
  }

}
