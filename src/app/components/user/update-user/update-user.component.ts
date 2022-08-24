import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/Utilisateur";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public editUserForm!: FormGroup;
  public userDetails!: Utilisateur;
  public errorMsg: string = "";

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit(): void {
    this.userDetails = this.us.getLoggedUser();
    console.log(this.userDetails);
    this.editUserForm = this.fb.group({
      noUtilisateur: [this.userDetails.noUtilisateur, Validators.required],
      pseudo: [this.userDetails.pseudo, Validators.required],
      nom: [this.userDetails.nom, Validators.required],
      prenom: [this.userDetails.prenom, Validators.required],
      email: [this.userDetails.email, [Validators.email, Validators.required]],
      telephone: [this.userDetails.telephone],
      rue: [this.userDetails.rue, Validators.required],
      codePostal: [this.userDetails.codePostal, Validators.required],
      ville: [this.userDetails.ville, Validators.required],
      motDePasse: [this.userDetails.motDePasse, Validators.required],
      motDePasseConfirm: [null, Validators.required],
      credit: [this.userDetails.credit],
      administrateur: [this.userDetails.administrateur]
    })
  }

  public onSubmitForm(): void {
    if(!this.us.editUser(this.editUserForm.value)){
      this.errorMsg = "Le compte n'a pas été modifié.";
    }
  }

}
