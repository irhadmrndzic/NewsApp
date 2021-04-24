import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from 'src/services/http-client.service';
import { NewsService } from 'src/services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { FilterService, SharedModule } from 'primeng/api';
import { Platform } from '@angular/cdk/platform';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [HttpClientService,
    Platform,
    NewsService,FilterService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
