import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../../models/Article";
import {ArticleService} from "../../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {DateTime} from "../../../models/DateTime";
import {GestionDatesService} from "../../../services/gestion-dates.service";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  public id: string = "";
  public nom: string = "";
  public article$!: Observable<Article>;
  public img: string = "";
  public isLogged: boolean = false;
  public montantEnchere: number = 0;

  constructor(
    private aS: ArticleService,
    private route: ActivatedRoute,
    private userS: UserService,
    private dateSvc: GestionDatesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.nom = this.route.snapshot.paramMap.get('nom') as string;
    this.img = "./assets/images/articles/"+this.nom+"-"+this.id+".jpg";
    this.article$ = this.aS.getArticleById(this.id);
    this.isLogged = this.userS.getIsLogged();
  }

  public setDefaultPic() {
    this.img = "./assets/images/camera.jpg";
  }

  public formatDate(date: Date): string {
    return this.dateSvc.dateToString(date);
  }

}
