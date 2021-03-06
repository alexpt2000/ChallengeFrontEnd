import { Injectable, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  public getListNewsJSON(): Observable<any[]> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .map((res: any) => res.json());
  }

  public getAnticleJSON(storyNumber: string): Observable<any[]> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + storyNumber + '.json?print=pretty')
      .map((res: any) => res.json());
  }

}


// https://hacker-news.firebaseio.com/v0/topstories.json

// https://hacker-news.firebaseio.com/v0/item/18690587.json

