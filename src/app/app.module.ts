import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { ArticleComponent } from './news/article/article.component';
import { NewsService } from './service/news.service';
import { HttpModule } from '@angular/http';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
