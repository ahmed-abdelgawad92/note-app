import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()
export class UserService{
    userURL = 'http://127.0.0.1:8000/api/users/';
    
    constructor(private http: HttpClient, private auth: AuthService){}
    getUser(id: number){
        return this.http.get(this.userURL+id).pipe(
            map((response: Response) => {
                const data = response.json();
                return data;
            })
        );
    }
    getUsers(){
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.auth.getTokenAuthorization()
            })
        };
        return this.http.get(this.userURL, httpOptions).pipe(
            map((data) => {
                console.log(data);
                return data;
            })
        );
    }
    refreshToken(){
        return this.http.get(this.userURL + 'token', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.auth.getTokenAuthorization()
            })}).pipe(
            map(data => this.auth.saveToken(data['token']))
        );  
    }
}