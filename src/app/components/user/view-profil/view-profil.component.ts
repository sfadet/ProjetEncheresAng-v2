import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/Utilisateur";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-view-profil',
  templateUrl: './view-profil.component.html',
  styleUrls: ['./view-profil.component.css']
})
export class ViewProfilComponent implements OnInit {

  public userDetails!: Utilisateur;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.userDetails = this.us.getLoggedUser();
  }

}
