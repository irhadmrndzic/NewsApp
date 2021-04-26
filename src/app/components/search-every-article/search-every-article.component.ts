import { Component, OnInit, ViewChild } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { TopHeadlinesItem } from 'src/interfaces/top-headlines-item';
import { NewsService } from 'src/services/news.service';
import * as _ from "lodash";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-every-article',
  templateUrl: './search-every-article.component.html',
  styleUrls: ['./search-every-article.component.scss']
})
export class SearchEveryArticleComponent implements OnInit {
  
  totalResults: any;
  resultsArr: any;
  searchTerm: any;

  loader:boolean=false;
  page = 1;
  pageSize = 20;

  articleId:number = 1;

  scrollDistance = 1;
  isLast: boolean;
  index: number;

  sortForm: FormGroup;
  sortOption:any;

  sortOptions: any= ['all','publishedAt','relevancy', 'popularity']
  constructor(private route:ActivatedRoute,
              public newsService:NewsService,
              public router:Router,
              public formBuilder:FormBuilder){
        
                this.createForm();
  }
  ngOnInit(){
      this.route.queryParams.subscribe(params =>{
        this.searchTerm = params.search;
        this.searchResults();
      });
  }
  



  searchResults(){
   this.newsService.searchArticles(this.searchTerm).subscribe(res=>{
     this.totalResults = res.totalResults;
    this.resultsArr = res.articles;
   });
  }

  public loadMoreArticles(event: LazyLoadEvent){
    
    if(!this.resultsLength){
      this.loader =true;
        this.page ++; 
        if(this.sortForm.controls.sortOption.value !=""){
          this.newsService.searchArticles(this.searchTerm,this.pageSize,this.page,this.sortForm.controls.sortOption.value).subscribe((res)=>{
            if(res){
              this.resultsArr.push(...res.articles)
                 this.loader =false;
            }
          });
        } else{
         this.newsService.searchArticles(this.searchTerm,this.pageSize,this.page).subscribe((res)=>{
          if(res){
            this.resultsArr.push(...res.articles)
               this.loader =false;
          }
        });
      }
    
    }
  }
  get resultsLength(){
    return this.resultsArr.length == this.totalResults;
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

createForm(){
  this.sortForm = this.formBuilder.group({
    sortOption: ['']
  })
}
  sortArticles(event){
  if(this.sortForm.controls.sortOption.value == "all"){
    this.newsService.searchArticles(this.searchTerm,this.pageSize,this.page).subscribe(res=>{
      this.resultsArr = res.articles;
    }); 
  }else{
    this.newsService.searchArticles(this.searchTerm,this.pageSize,this.page,this.sortForm.controls.sortOption.value).subscribe(res=>{
      this.resultsArr = res.articles;
    });    
    
  }
  }
}
