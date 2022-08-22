import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Utilisateur = new Utilisateur(0,"admin","bob","leponge","b.Leponge@eni.fr","0102030405","rue de la mer","44000","Nantes","admin", 0, false);
  public isLogged: EventEmitter<boolean>  = new EventEmitter<boolean>();
  public isLogged2: boolean = false;

  constructor(private http: HttpClient) {

  }

  /**
   * Permet de savoir qu'un utilisateur est connecté
   */
  public connect(){
    this.isLogged.emit(true);
    this.isLogged2 = true;
  }

  /**
   * Permet de se déconnecter
   */
  public disconnect(){
    this.isLogged.emit(false);
    this.isLogged2 = false;
  }

  /**
   * Permet de récupérer l'utilisateur enregistré dans le service
   */
  public getLoggedUser(): Utilisateur {
    return this.user;
  }

  /**
   * Requete API GET
   * ---------------
   * Permet de récupérer un utilisateur en fonction de son 'login' et de son 'password'
   * Cette fonction est appelée depuis le formulaire de la page de connexion.
   * Si un utilisateur avec un identifiant différent de 0 est trouvé,
   * on indique que les infos de l'utilisateur ( this.user.emit(data) )
   * et on indique que quelqu'un est connecté ( this.connect() )
   * 'this.config.getApiPath()' va chercher l'url de l'API dans le service 'config'
   * @param login
   * @param password
   */
  public getUserByLoginAndPassword(login: string, password: string): boolean {
    let isGood: boolean = false;
    if (this.user.pseudo == login && this.user.motDePasse == password){
      isGood = true;
      this.connect();
    }

    return isGood;
  }

  public addUser(userForm : {pseudo: string, nom: string, prenom: string, email: string, telephone: string, rue: string, codePostal: string, ville: string, motDePasse: string}): void {
    let newUser = new Utilisateur(
      0,
                userForm.pseudo,
                userForm.nom,
                userForm.prenom,
                userForm.email,
                userForm.telephone,
                userForm.rue,
                userForm.codePostal,
                userForm.ville,
                userForm.motDePasse,
                5,
                false
      )
    console.log(newUser)

  }
}
