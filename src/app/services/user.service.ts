import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user!: Utilisateur;
  public isLogged: EventEmitter<boolean>  = new EventEmitter<boolean>();
  public isLogged2: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

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

  public getLoggedUserId(): number {
    return this.user.noUtilisateur;
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

    let body = { pseudo: login, motDePasse: password};

    this.http.post<Utilisateur>('http://localhost:8080/utilisateur/login', body).subscribe(
      data => {
        if (data) {
          this.user = data;
          this.connect();
          this.router.navigate(['/']);
        }
      }
    );
    return false;
  }

  public addUser(userForm : {pseudo: string, nom: string, prenom: string, email: string, telephone: string, rue: string, codePostal: string, ville: string, motDePasse: string, credit: number, administrateur: boolean}): boolean {
    this.http.post<Utilisateur>('http://localhost:8080/utilisateur', userForm).subscribe(
      data => {
        if(data){
          this.router.navigate(['/login']);
        }
      }
    );
    return false;
  }

  public editUser(userForm : {id: number, pseudo: string, nom: string, prenom: string, email: string, telephone: string, rue: string, codePostal: string, ville: string, motDePasse: string, credit: number, administrateur: boolean}) {
    console.log(userForm);
    return false;
  }

  public getIsLogged(): boolean {
    return this.isLogged2;
  }
}
