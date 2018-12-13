import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth: AuthService, private http: HttpClient){}
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
      
        return next.handle(req).pipe(
            tap(event => console.log(event)        
        ));
    }
}