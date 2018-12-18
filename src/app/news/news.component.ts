import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { NewsService } from 'app/service/news.service';

@Component({
  selector: 'mt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: Story[] = [];

  constructor(private topNewsService: NewsService) { }

  ngOnInit() {

    this.topNewsService.getListNewsJSON().subscribe(
      storyIdList => {
        storyIdList.forEach(storyId => {
          this.topNewsService.getAnticleJSON(storyId).subscribe(
            storyRecord => {
              this.articles.push(
                new Story(storyRecord['title'], storyRecord['by'], storyRecord['url'])
              )
            }
          );
        });
      }
    );
  }
}
export class Story {
  constructor(
    public title: string,
    public by: string,
    public url: string) {
  }
}