import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})


export class NewsService {
  private apiUrl:string = environment.apiUrl;
  private apiKey:string = environment.apiKey;


  private _searchResults = new Subject<any>();
  public searchResults$ = this._searchResults.asObservable();

  constructor(public http:HttpClientService) { 
  }

  public getTopHeadlines(pageSize?:number,page?:number){
   return this.http.get(this.apiUrl + "top-headlines?country=us&pageSize="+ pageSize +"&page="+page+ "&apiKey="+this.apiKey);
  }

  public searchArticles(searchTerm:string,pageSize?:number,page?:number){
   return this.http.get(this.apiUrl+"everything?q="+searchTerm+"&pageSize="+ pageSize +"&page="+page +  "&apiKey="+this.apiKey);
  }

}
