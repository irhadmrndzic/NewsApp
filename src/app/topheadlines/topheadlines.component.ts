import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor(public newsService:NewsService) { 

    this.newsService.getTopHeadlines(20,2).subscribe((res:TopHeadlinesItem)=>{
      if(res){
        this.topHeadlinesArr = res.articles;
          this.loading = false;
          this.appLoaded.emit(false);
      }
    });

  }

  ngOnInit() {
  }

}
