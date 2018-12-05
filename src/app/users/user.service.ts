import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class UserService{
    constructor(private http: Http){}

    getUsers(){
        return this.http.get('http://127.0.0.1:8000/api/users');
    }
}