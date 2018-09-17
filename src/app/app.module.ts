import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './searchForm/searchForm.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { TweetService } from './services/tweet.service';
import { TweetInterface } from './interfaces/tweet.interface';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavigatorComponent,
    TableComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TweetService,
    { provide: TweetInterface, useExisting: TweetService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
