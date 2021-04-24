import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { LazyLoadEvent } from 'primeng/api';
import { TopHeadlinesItem } from 'src/interfaces/top-headlines-item';
import { NewsService } from 'src/services/news.service';
@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.scss']
})
export class TopheadlinesComponent implements OnInit {
  @Output() appLoaded = new EventEmitter<any>();


  topHeadlinesArr:TopHeadlinesItem[];
  loading:boolean = true;
  loader:boolean=false;
  totalResults:number;
  page = 1;
  pageSize = 20;

  scrollDistance = 1;
  constructor(public newsService:NewsService) { 
  }

  ngOnInit() {
  this.loadInitHeadlines();
  }

  loadInitHeadlines(){
    this.newsService.getTopHeadlines(this.pageSize,this.page).subscribe((res:TopHeadlinesItem)=>{
      if(res){
        console.log("res",res);
        this.totalResults = res.totalResults;
        this.topHeadlinesArr = res.articles;
          this.loading = false;
          this.appLoaded.emit(false);
      }
    });
  }


  public loadMoreHeadlines(event: LazyLoadEvent){
    console.log("enteed");
    
    if(!this.resultsLength){
      this.loader =true;
        this.page ++; 
      this.newsService.getTopHeadlines(this.pageSize,this.page).subscribe((res:TopHeadlinesItem)=>{
        if(res){
          this.topHeadlinesArr.push(...res.articles)
             this.loader =false;
        }
      });
    }
  }

get resultsLength(){
  console.log(this.topHeadlinesArr.length,this.totalResults);
  return this.topHeadlinesArr.length == this.totalResults;
}

scrollToTop(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

}
