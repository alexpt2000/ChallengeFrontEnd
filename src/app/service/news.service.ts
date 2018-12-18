import { Injectable, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Article } from 'app/news/article/article.model';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }


  public getListNewsJSON(): Observable<any[]> {
    return this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .map((res: any) => res.json());
  }

  public getAnticleJSON(): Observable<Article[]> {
    return this.http.get("https://hacker-news.firebaseio.com/v0/item/18690587.json")
      .map((res: any) => res.json());
  }

}


// https://hacker-news.firebaseio.com/v0/topstories.json

// https://hacker-news.firebaseio.com/v0/item/18690587.json

