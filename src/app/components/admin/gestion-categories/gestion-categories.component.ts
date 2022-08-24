import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategorieService} from "../../../services/categorie.service";
import {Observable, tap} from "rxjs";
import {Categorie} from "../../../models/Categorie";

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {

  newCategorie!: FormGroup;
  editCategorie!: FormGroup;
  public categories$!: Observable<Categorie[]>
  showEdit: boolean = false;

  constructor(private fb: FormBuilder, private catServ: CategorieService) { }

  ngOnInit(): void {
    this.getCategories();
    this.newCategorie = this.fb.group({
      libelle: [null, Validators.required]
    });
    this.editCategorie = this.fb.group({
      noCategorie: [null, Validators.required],
      libelle: [null, Validators.required]
    })
    this.showEdit = false;
  }

  /**
   * Récupérer la liste des catégories
   */
  getCategories(): void {
    this.categories$ = this.catServ.getCategories();
  }

  /**
   * Formulaire d'ajout de catégorie
   */
  onSubmitForm(): void {
    this.catServ.addCategorie(this.newCategorie.value).pipe(
      tap(()=> this.getCategories()),
      tap(()=> this.resetNewCategorie())
    ).subscribe();
  }

  /**
   * Permet de reset les données du formualaire d'ajout
   */
  resetNewCategorie(): void {
    this.newCategorie.setValue({
      libelle: ''
    });
  }

  /**
   * Supprime une catégorie
   * @param id    l'identifiant de la catégorie
   */
  onDeleteCategorie(id: number): void {
    this.catServ.deleteCategorie(id).pipe(
      tap(()=> this.getCategories())
    ).subscribe();
  }

  /**
   * Formulaire de modification d'une catégorie
   */
  onSubmitFormEdit(): void {
    console.log(this.editCategorie.value);
    this.catServ.updateCategorie(this.editCategorie.value).pipe(
      tap(()=>{
        this.resetEditCategorie();
        this.resetNewCategorie();
        this.getCategories();
        this.showEdit = false;
      })
    ).subscribe();
  }

  /**
   * Affiche le formulaire de modification
   * @param id
   */
  onEditCategorie(id: number): void {
    this.showEdit = true;
    this.catServ.getCategorieById(id).pipe(
      tap((data)=> {
        this.editCategorie.setValue({
          noCategorie: data.noCategorie,
          libelle: data.libelle
        });
      })
    ).subscribe();
  }

  /**
   * Reset les données du formulaire de modification
   */
  resetEditCategorie(): void {
    this.editCategorie.setValue({
      noCategorie: '',
      libelle: ''
    });
  }

  /**
   * Annulation de la modification
   */
  onCancelEdit(): void {
    this.showEdit=false;
    this.resetNewCategorie();
  }

}
