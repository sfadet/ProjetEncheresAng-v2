import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/user/login/login.component";
import {CreateUserComponent} from "./components/user/create-user/create-user.component";
import {UpdateUserComponent} from "./components/user/update-user/update-user.component";

const routes: Routes = [
  { path: 'profil', component: UpdateUserComponent},
  { path: 'creerCompte', component: CreateUserComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
