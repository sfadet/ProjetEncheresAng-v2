import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../services/article.service";
import {Observable} from "rxjs";
import {Categorie} from "../../../models/Categorie";
import {CategorieService} from "../../../services/categorie.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-mise-en-vente-article',
  templateUrl: './mise-en-vente-article.component.html',
  styleUrls: ['./mise-en-vente-article.component.css']
})
export class MiseEnVenteArticleComponent implements OnInit {

  newArticle!: FormGroup;
  categories$!: Observable<Categorie[]>
  dateDebut = new Date();
  dateFin = new Date();
  idUtilisateur: number = 0;
  errorMsg: string = "";


  constructor(private fb: FormBuilder, private artServ: ArticleService, private catSvc: CategorieService, private userSvc: UserService) { }

  ngOnInit(): void {
    this.dateFin.setMonth(this.dateFin.getMonth()+1)
    this.newArticle = this.fb.group({
      nomArticle: [null, Validators.required],
      description: [null, Validators.required],
      dateDebutEncheres: new FormControl((this.dateDebut).toISOString().substring(0,10)),
      dateFinEncheres: new FormControl((this.dateFin).toISOString().substring(0,10)),
      miseAPrix: [0, Validators.required],
      noCategorie: {},
      categorie: null,
      vendeur: null,
    })
    this.categories$ = this.catSvc.getCategories();
    console.log(this.userSvc.getLoggedUserId());
    this.idUtilisateur = this.userSvc.getLoggedUserId();
  }

  onSubmitForm(): void {
    this.newArticle.setValue({
      nomArticle: this.newArticle.value.nomArticle,
      description: this.newArticle.value.description,
      dateDebutEncheres: this.newArticle.value.dateDebutEncheres,
      dateFinEncheres: this.newArticle.value.dateFinEncheres,
      miseAPrix: this.newArticle.value.miseAPrix,
      noCategorie: this.newArticle.value.noCategorie,
      categorie: {noCategorie: this.newArticle.value.noCategorie},
      vendeur: {noUtilisateur: this.idUtilisateur}
    })
    if(!this.artServ.addArticle(this.newArticle.value)){
     this.errorMsg = "L'ajout de l'article a échoué.";
    }
  }


}
