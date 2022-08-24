import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";
import {Article} from "../../models/Article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles$!: Observable<Article[]>

  constructor(private as: ArticleService) { }

  ngOnInit(): void {}

}
