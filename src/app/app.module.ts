import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './searchForm/searchForm.component';
import { NavigatorComponent } from './navigator/navigator.component';

import { TweetService } from './services/tweet.service';
import { SearchFormInterface } from './interfaces/searchForm.interface';
import { PaginatorInterface } from './interfaces/paginator.interface';
import { TableInterface } from './interfaces/table.interface';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';

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
    { provide: SearchFormInterface, useExisting: TweetService },
    { provide: PaginatorInterface, useExisting: TweetService },
    { provide: TableInterface, useExisting: TweetService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
