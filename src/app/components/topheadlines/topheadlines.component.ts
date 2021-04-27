import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { TopHeadlinesItem } from 'src/interfaces/top-headlines-item';
import { NewsService } from 'src/services/news.service';
@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.scss']
})
export class TopheadlinesComponent implements OnInit {

  topHeadlinesArr:TopHeadlinesItem[];
  loader:boolean=false;
  totalResults:number;
  page = 1;
  pageSize = 20;
  isLast: boolean;
  index: number;
  constructor(public newsService:NewsService,
              public router:Router,
              public route:ActivatedRoute) { 

              this.router.events.subscribe((e: any) => {
                  if (e instanceof NavigationEnd) {
                    this.loadInitHeadlines();
                  }
                });
  }


  ngOnInit() {
  this.loadInitHeadlines();
  }

  loadInitHeadlines(){
    this.newsService.getTopHeadlines(this.pageSize,this.page).subscribe((res)=>{
      if(res){
        this.totalResults = res.totalResults;
        this.topHeadlinesArr = res.articles;
      }
    });
  }

  public loadMoreHeadlines(event: LazyLoadEvent){
    if(!this.resultsLength){
      this.loader =true;
        this.page ++; 
      this.newsService.getTopHeadlines(this.pageSize,this.page).subscribe((res)=>{
        if(res){
          this.topHeadlinesArr.push(...res.articles)
             this.loader =false;
        }
      });
    }
  }

   prepareData(item:TopHeadlinesItem) {
    return{
      author: item.author,
      title: item.title,
      description:item.description,
      image:item.urlToImage,
      publishedAt:item.publishedAt,
      content:item.content,
      sourceName:item.source.name
    }
  }

get resultsLength(){
  return this.topHeadlinesArr.length == this.totalResults;
}

}
