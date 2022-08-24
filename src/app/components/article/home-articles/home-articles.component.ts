import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../../models/Article";
import {ArticleService} from "../../../services/article.service";
import {CategorieService} from "../../../services/categorie.service";
import {Categorie} from "../../../models/Categorie";

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.css']
})
export class HomeArticlesComponent implements OnInit {

  public articles$!: Observable<Article[]>;
  public categories$!: Observable<Categorie[]>;

  constructor(private as: ArticleService, private catSvc: CategorieService) { }

  ngOnInit(): void {
    this.articles$ = this.as.getArticles();
    this.categories$ = this.catSvc.getCategories();
  }

}
