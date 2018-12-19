import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { NewsComponent } from './news/news.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent}

]
