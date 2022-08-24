import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-nav-profil',
  templateUrl: './nav-profil.component.html',
  styleUrls: ['./nav-profil.component.css']
})
export class NavProfilComponent implements OnInit {

  public isLogged: boolean = false;
  public isAdmin: boolean = true;

  constructor(private loginSvc: UserService) { }

  ngOnInit(): void {
    this.loginSvc.isLogged.subscribe(
      (data: boolean) => this.isLogged = data
    )
  }

  public connect(){
    this.loginSvc.connect();
  }

  public disconnect(){
    this.loginSvc.disconnect();
    this.isAdmin = false;
  }

}
