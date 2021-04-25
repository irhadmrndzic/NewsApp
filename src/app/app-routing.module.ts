import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SearchEveryArticleComponent } from './components/search-every-article/search-every-article.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';


const routes: Routes = [
  {path:'',component:TopheadlinesComponent}, //Home
  {path:'article-details',component:ArticleDetailsComponent, data:{obj:{}}},
  { path: 'search',
  component: SearchEveryArticleComponent,
  data: {
    type: 'search'
  }}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
