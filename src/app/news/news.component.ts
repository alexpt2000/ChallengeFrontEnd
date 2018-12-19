import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { NewsService } from 'app/service/news.service';

@Component({
  selector: 'mt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: Article[] = [];
  hideCircle: boolean;

  constructor(private topNewsService: NewsService) { }

  ngOnInit() {
    this.hideCircle = true;
     this.topNewsService.getListNewsJSON().subscribe(
      storyIdList => {
        storyIdList.forEach(storyId => {
          this.topNewsService.getAnticleJSON(storyId).subscribe(
            storyRecord => {
              this.articles.push(
                new Article(storyRecord['id'], storyRecord['by'], storyRecord['descendants'], storyRecord['score'], storyRecord['time'], storyRecord['title'],  storyRecord['type'], storyRecord['url'])
              )
              this.hideCircle = false;
            }
          );
        });
      }
    );
  }
}
