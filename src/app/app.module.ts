import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { NoteAddComponent } from './notes/note-add/note-add.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouterModule } from './app-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { UserService } from './users/user.service';
import { UserComponent } from './users/user/user.component';
import { AuthService } from './auth/auth.service';
import { CustomMaterialModule } from './shared/custom-material.module';
import { JWT } from './auth/jwt-token.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotesComponent,
    NoteComponent,
    NoteEditComponent,
    NoteAddComponent,
    ProfileComponent,
    UserEditComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShortenPipe,
    HomeItemComponent,
    UserComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [
    UserService,
    AuthService,
    JWT
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
