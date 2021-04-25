import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  articleId:number = 1;

  scrollDistance = 1;
  isLast: boolean;
  index: number;
  constructor(public newsService:NewsService,public router:Router) { 
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

        for (let index = 0; index < this.topHeadlinesArr.length; index++) {
            this.topHeadlinesArr[index].id = this.articleId++;
            if(index == this.topHeadlinesArr.length-1){
                this.index = index;
            }

        }
        console.log("arrt",this.topHeadlinesArr);

          this.loading = false;
      }
    });
  }


  public loadMoreHeadlines(event: LazyLoadEvent){
    
    if(!this.resultsLength){
      this.loader =true;
        this.page ++; 
      this.newsService.getTopHeadlines(this.pageSize,this.page).subscribe((res:TopHeadlinesItem)=>{
        if(res){
          this.topHeadlinesArr.push(...res.articles)
            for (let index = this.index; index < this.topHeadlinesArr.length; index++){
                this.topHeadlinesArr[index].id = this.articleId ++;
            }
             this.loader =false;

             console.log("arr",this.topHeadlinesArr);
             
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
  console.log(this.topHeadlinesArr.length,this.totalResults);
  return this.topHeadlinesArr.length == this.totalResults;
}

scrollToTop(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

}
