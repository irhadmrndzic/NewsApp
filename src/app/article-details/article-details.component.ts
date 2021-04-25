import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: any;

  constructor(private router: Router,
    public activatedRoute: ActivatedRoute) {
      // this.article =  this.activatedRoute.snapshot.paramMap.get("author");
      // console.log(this.article);
      this.activatedRoute.paramMap.subscribe((res)=>{
        this.article = res;
        console.log(this.article);
        
      });
}


  ngOnInit() {

    
  }

}
