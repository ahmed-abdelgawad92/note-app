import { Injectable } from "@angular/core";
import { JWT } from "./jwt-token.service";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService{
    constructor(private http: HttpClient, public jwt: JWT){}
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
                this.jwt.saveTokenToStorage(response['token']);
                return this.jwt.getPayload();
            })
        );
    }
    getToken(){
        return '?token='+this.jwt.getRawToken();
    }
}