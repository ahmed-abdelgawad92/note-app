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
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
