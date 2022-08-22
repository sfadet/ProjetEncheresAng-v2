import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public newUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      pseudo: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      telephone: [null],
      rue: [null, Validators.required],
      codePostal: [null, Validators.required],
      ville: [null, Validators.required],
      motDePasse: [null, Validators.required],
      motDePasseConfirm:  [null, Validators.required]
    }, {validator: this.matchPassword})
  }

  public onSubmitForm(): void {
    this.us.addUser(this.newUserForm.value);
  }

  /**
   * Permet de comparer les deux saisies du mot de passe
   * @param nuf   correspond à newUserForm
   * @private
   */
  private matchPassword(nuf: AbstractControl): ValidationErrors | null {
    return nuf.value.motDePasse != nuf.value.motDePasseConfirm ? { 'noMatch': true } : null;
  }

}
