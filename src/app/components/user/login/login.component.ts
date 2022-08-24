import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMsg: string = "";

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    },{
      updateOn: "blur"
    })
  }

  onSubmitLogin(): void {
    if(!this.us.getUserByLoginAndPassword(this.loginForm.value.login, this.loginForm.value.password)){
      this.errorMsg = "Impossible de se connecter. Login ou mot de passe invalide.";
    }
  }

}
