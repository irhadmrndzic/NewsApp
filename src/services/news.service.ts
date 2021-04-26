import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private apiUrl:string = environment.apiUrl;
  private apiKey:string = environment.apiKey;

  constructor(public http:HttpClientService) { 
  }

  public getTopHeadlines(pageSize?:number,page?:number){
   return this.http.get(this.apiUrl + "top-headlines?country=us&pageSize="+ pageSize +"&page="+page+ "&apiKey="+this.apiKey);
  }

  public searchArticles(searchTerm:string,pageSize?:number,page?:number,sortBy?:string){
   return this.http.get(this.apiUrl+"everything?q="+searchTerm+"&sortBy="+sortBy+"&pageSize="+ pageSize +"&page="+page + "&apiKey="+this.apiKey);
  }

}
