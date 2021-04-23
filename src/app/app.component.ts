import { Component } from '@angular/core';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewsApp';
  loader: boolean = true;
  constructor(public newsProvider:NewsService) {
  }

  showLoader(loaded){
    this.loader = loaded;
  }
}
