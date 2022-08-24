import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-Routing-modules";
import { NavbarComponent } from './components/navbar/nav-top/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NavProfilComponent } from './components/navbar/nav-profil/nav-profil.component';
import { ViewProfilComponent } from './components/user/view-profil/view-profil.component';
import { CarteArticleComponent } from './components/article/carte-article/carte-article.component';
import { HomeArticlesComponent } from './components/article/home-articles/home-articles.component';
import { DetailArticleComponent } from './components/article/detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    UpdateUserComponent,
    NavProfilComponent,
    ViewProfilComponent,
    CarteArticleComponent,
    HomeArticlesComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
