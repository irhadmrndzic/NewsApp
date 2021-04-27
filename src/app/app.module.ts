import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from 'src/services/http-client.service';
import { NewsService } from 'src/services/news.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterService, SharedModule } from 'primeng/api';
import { Platform } from '@angular/cdk/platform';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchEveryArticleComponent } from './components/search-every-article/search-every-article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopheadlinesComponent } from './components/topheadlines/topheadlines.component';
import { LoaderInterceptorService } from 'src/services/loader-interceptor.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    LoaderComponent,
    ArticleDetailsComponent,
    NavbarComponent,
    SearchEveryArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    
  ],exports:[
NgSelectModule
  ],
  providers: [HttpClientService,
    Platform,
    NewsService,FilterService
    ,NgxSpinnerService,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
