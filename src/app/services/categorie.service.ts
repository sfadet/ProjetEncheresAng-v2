import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Observable} from "rxjs";
import {Categorie} from "../models/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private mapping: string = "/categorie";

  constructor(private http: HttpClient, private config: ConfigService) { }

  /**
   * Permet de récupérer la liste de toutes les catégories
   */
  public getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.config.getApiPath() + this.mapping);
  }

  /**
   * Permet de récupére une categorie depuis son id
   * @param id    l'indentifiant de la catégorie
   */
  public getCategorieById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.config.getApiPath() + this.mapping + '/' + id);
  }

  /**
   * Permet d'ajouter une catégorie
   * @param formValue
   */
  public addCategorie(formValue: {libelle: string}) : Observable<Categorie> {
    return this.http.post<Categorie>(this.config.getApiPath() + this.mapping, formValue);
  }

  /**
   * Permet de supprimer une catégorie
   * @param id
   */
  public deleteCategorie(id: number): Observable<any> {
    return this.http.delete<any>(this.config.getApiPath() + this.mapping + "/" + id);
  }

  /**
   * Modifier un genre
   */
  public updateCategorie(formValue: {noCategorie: number, libelle: string}): Observable<Categorie> {
    return this.http.put<Categorie>(this.config.getApiPath() + this.mapping, formValue);
  }

}
