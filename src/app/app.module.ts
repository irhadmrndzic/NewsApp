import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from 'src/services/http-client.service';
import { NewsService } from 'src/services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { FilterService, SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';


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
    CommonModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    TableModule,
    PanelModule
  ],
  providers: [HttpClientService,
  NewsService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
