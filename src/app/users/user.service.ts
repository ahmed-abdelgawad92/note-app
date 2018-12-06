import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user.model";
import { map } from 'rxjs/operators';
@Injectable()
export class UserService{
    constructor(private http: Http){}
    getUser(id: number){
        return this.http.get('http://127.0.0.1:8000/api/users/'+id).pipe(
            map((response: Response) => {
                const data = response.json();
                return data;
            })
        );
    }
    getUsers(){
        return this.http.get('http://127.0.0.1:8000/api/users').pipe(
            map((response: Response) => {
                const data = response.json();
                return data;
            })
        );
    }
}