import { Injectable, OnInit } from "@angular/core";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService implements OnInit{
    ngOnInit(): void {
        
    }
    userURL = 'http://127.0.0.1:8000/api/users/';
    constructor(private http: HttpClient, private auth: AuthService){}
    getUser(id: number){
        if(this.auth.jwt.isAuthenticated()){
            return this.http.get(this.userURL+id+this.auth.getToken()).pipe(
                map((response: Response) => {
                    const data = response.json();
                    return data;
                })
            );
        }
        return null;
    }
    getUsers(){
        this.auth.jwt.isAuthenticated()
        
        return this.http.get(this.userURL.slice(0,this.userURL.length-1)+this.auth.getToken()).pipe(
            map((response: Response) => {
                const data = response.json();
                return data;
            })
        );
    }
}