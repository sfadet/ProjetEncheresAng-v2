import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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

  dateDebut = new Date();
  dateFin = new Date();
  newArticle!: FormGroup;
  categories$!: Observable<Categorie[]>
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
      miseAPrix: [0, Validators.min(1)],
      noCategorie: [null],
      categorie: [null],
      vendeur: null,
      newRetrait: [false],
      rueRetrait : new FormControl({value: null, disabled: true}),
      cpRetrait:new FormControl({value: null, disabled: true}),
      villeRetrait: new FormControl({value: null, disabled: true}),
      lieuRetrait: null
    }, {validator: this.checkRetrait});
    this.categories$ = this.catSvc.getCategories();
    this.idUtilisateur = this.userSvc.getLoggedUserId();

    this.newArticle.get('newRetrait')?.valueChanges
      .subscribe(value => {
        if (!value) {
          this.newArticle.get('rueRetrait')?.disable();
          this.newArticle.get('cpRetrait')?.disable();
          this.newArticle.get('villeRetrait')?.disable();
          this.newArticle.patchValue({rueRetrait: null, cpRetrait: null, villeRetrait: null});
        } else {
          this.newArticle.get('rueRetrait')?.enable();
          this.newArticle.get('cpRetrait')?.enable();
          this.newArticle.get('villeRetrait')?.enable();
        }
      })
  }

  onSubmitForm(): void {
    this.newArticle.patchValue({
      categorie: {noCategorie: this.newArticle.value.noCategorie},
      vendeur: {noUtilisateur: this.idUtilisateur},
      lieuRetrait: {rue: this.newArticle.value.rueRetrait, codePostal: this.newArticle.value.cpRetrait, ville: this.newArticle.value.villeRetrait}
    })
    if (this.newArticle.value.newRetrait) {
      this.newArticle.patchValue({
        lieuRetrait: {rue: this.newArticle.value.rueRetrait, codePostal: this.newArticle.value.cpRetrait, ville: this.newArticle.value.villeRetrait}
      })
    } else {
      this.newArticle.patchValue({
        lieuRetrait: null
      })
    }
    if(!this.artServ.addArticle(this.newArticle.value)){
     this.errorMsg = "L'ajout de l'article a échoué.";
    }
  }

  private checkRetrait(na: AbstractControl): Validators | null {
    let noMatch: boolean;
    if (na.value.noCategorie) {
      if (na.value.newRetrait) {
        noMatch = !(na.value.rueRetrait != null && na.value.cpRetrait != null && na.value.villeRetrait != null);
      } else {
        noMatch = false;
      }
    } else {
      noMatch = true;
    }

    return (noMatch) ? {'noMatch': true} : null;
  }

}
