import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { NotesComponent } from "./notes/notes.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { NoteComponent } from "./notes/note/note.component";
import { NoteEditComponent } from "./notes/note-edit/note-edit.component";
import { NoteAddComponent } from "./notes/note-add/note-add.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./users/profile/profile.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'sign-up', component: SignUpComponent},
    { path: 'notes', component: NotesComponent, children:[
        { path: ':id', component: NoteComponent},
        { path: ':id/edit', component: NoteEditComponent},
        { path: 'create', component: NoteAddComponent}
    ]},
    { path: 'users', component: UsersComponent, children:[
        { path: 'profile/:id', component: ProfileComponent},
        { path: 'edit', component: UserEditComponent},
    ]},
    { path: 'not-found-error', component: PageNotFoundComponent},
    { path: '**', component: PageNotFoundComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRouterModule{

}