import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/user/login/login.component";
import {CreateUserComponent} from "./components/user/create-user/create-user.component";
import {UpdateUserComponent} from "./components/user/update-user/update-user.component";
import {ViewProfilComponent} from "./components/user/view-profil/view-profil.component";
import {DetailArticleComponent} from "./components/article/detail-article/detail-article.component";

const routes: Routes = [
  { path: 'article/:id/:nom', component: DetailArticleComponent},
  { path: 'edit-profil', component: UpdateUserComponent},
  { path: 'profil', component: ViewProfilComponent},
  { path: 'creerCompte', component: CreateUserComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
