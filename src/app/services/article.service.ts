import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Article} from "../models/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private mapping: string = "/article";

  constructor(private http: HttpClient, private config: ConfigService, private route: Router) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.config.getApiPath()+this.mapping)
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(this.config.getApiPath()+this.mapping+'/'+id);
  }
}
