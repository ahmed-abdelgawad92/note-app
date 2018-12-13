import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWT } from "./jwt-token.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthService extends JWT{
    constructor(private http: HttpClient, private router: Router){ 
        super();
    }
    signUp(user: Object){
        return this.http.post('http://127.0.0.1:8000/api/user/create',user);
    }
    /*isEmailUnique(email: string){
        return this.http.get('http://127.0.0.1:8000/api/user/unique_email');
    }*/
    signIn(email: string, password: string){
        return this.http.post('http://127.0.0.1:8000/api/user/login',{
            email: email,
            password: password
        }).pipe(
            map(response => {
                this.saveToken(response['token']);
                this.router.navigate(['/']);
            })
        );
    }
    refreshToken() {
        return this.http.get<void>('http://127.0.0.1:8000/api/users/token', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.getTokenAuthorization()
            })
        }).pipe(
            map(data => {this.saveToken(data['token']); console.log(data);})
        );
    }
}