import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../models/Article";

@Component({
  selector: 'app-carte-article',
  templateUrl: './carte-article.component.html',
  styleUrls: ['./carte-article.component.css']
})
export class CarteArticleComponent implements OnInit {

  @Input()
  public article!: Article;
  public img: string = "";
  public url: string = "";
  public tempsRestant: string = "";

  constructor() { }

  ngOnInit(): void {
    this.img = "./assets/images/articles/"+this.article.nomArticle.toLowerCase().replace(" ","-")+"-"+this.article.noArticle+".jpg";
    this.url = this.article.noArticle+"/"+this.article.nomArticle.toLowerCase().replace(" ","-");
    this.tempsRestant = this.calculateDiff(this.article.dateFinEncheres);
  }

  public setDefaultPic() {
    this.img = "./assets/images/camera.jpg";
  }

  calculateDiff(dateSent: Date): string{
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    let jLeft = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) /(1000 * 60 * 60 * 24))*-1;

    return jLeft > 1 ? jLeft + " jours restant" : "Dernier jour";
  }

}
