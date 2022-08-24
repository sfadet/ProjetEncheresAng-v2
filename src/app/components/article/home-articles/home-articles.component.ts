import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../../models/Article";
import {ArticleService} from "../../../services/article.service";

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.css']
})
export class HomeArticlesComponent implements OnInit {

  public articles$!: Observable<Article[]>;

  constructor(private as: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.as.getArticles();
  }

}
