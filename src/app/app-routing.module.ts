import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HASH_TAG_SEARCH,
  USER_SEARCH,
  HASH_TAG_SEARCH_URL,
  USER_SEARCH_URL
} from './constants';
import { SearchFormComponent } from './searchForm/searchForm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: HASH_TAG_SEARCH_URL, // Defualt page
    pathMatch: 'full'
  }, {
    path: HASH_TAG_SEARCH_URL,
    component: SearchFormComponent,
    data: {
      formTitle: HASH_TAG_SEARCH
    }
  }, {
    path: USER_SEARCH_URL,
    component: SearchFormComponent,
    data: {
      formTitle: USER_SEARCH
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
