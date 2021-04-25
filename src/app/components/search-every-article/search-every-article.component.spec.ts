import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEveryArticleComponent } from './search-every-article.component';

describe('SearchEveryArticleComponent', () => {
  let component: SearchEveryArticleComponent;
  let fixture: ComponentFixture<SearchEveryArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEveryArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEveryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
