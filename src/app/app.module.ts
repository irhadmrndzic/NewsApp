import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from 'src/services/http-client.service';
import { NewsService } from 'src/services/news.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { FilterService, SharedModule } from 'primeng/api';
import { Platform } from '@angular/cdk/platform';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { ArticleDetailsComponent } from './article-details/article-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    LoaderComponent,
    ArticleDetailsComponent
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
    NewsService,FilterService,NgxSpinnerService,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
