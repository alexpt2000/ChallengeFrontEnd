import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { NewsService } from 'app/service/news.service';

@Component({
  selector: 'mt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  topNews: any[];
  articles: Article[];

  // articles: Article[] = [
  //   {
  //     id: "bread-bakery",
  //     name: "Bread & Bakery",
  //     category: "Bakery",
  //     deliveryEstimate: "25m",
  //     rating: 4.9,
  //     imagePath: "assets/img/restaurants/breadbakery.png"
  //   },
  //   {
  //     id: "burger-house",
  //     name: "Burger House",
  //     category: "Hamburgers",
  //     deliveryEstimate: "100m",
  //     rating: 3.5,
  //     imagePath: "assets/img/restaurants/burgerhouse.png"
  //   }];

  constructor(private topNewsService: NewsService) { }

  ngOnInit() {
    this.topNewsService.getListNewsJSON()
      .subscribe(news => this.topNews = news);

      this.topNewsService.getAnticleJSON()
      .subscribe(news => this.articles = news);
  }
}
