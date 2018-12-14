import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { catchError, switchMap } from "rxjs/operators";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );
    constructor(private auth: AuthService, private http: HttpClient){}
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
      
        return next.handle(req).pipe(catchError(
                error => {
                    // We don't want to refresh token for some requests like login or refresh token itself
                    // So we verify url and we throw an error if it's the case
                    if (req.url.includes('login') || req.url.includes("token")){
                        // We do another check to see if refresh token failed
                        // In this case we want to logout user and to redirect it to login page

                        if (req.url.includes("token")) {
                            this.auth.signOut();
                        }

                        return Observable.throw(error);
                    }
                    // If error status is different than 401 we want to skip refresh token
                    // So we check that and throw the error if it's the case
                    if(error.status !== 401){
                        return Observable.throw(error);
                    }
                    if(this.refreshTokenInProgress){
                    }else{
                        this.refreshTokenInProgress = true;
                        // Call auth.refreshAccessToken(this is an Observable that will be returned)
                        return this.auth
                            .refreshToken().pipe(
                            switchMap((token: any) => {
                                //When the call to refreshToken completes we reset the refreshTokenInProgress to false
                                // for the next time the token needs to be refreshed
                                this.refreshTokenInProgress = false;
                                this.refreshTokenSubject.next(token);

                                return next.handle(this.addAuthenticationToken(req));
                            }),
                            catchError((err: any) => {
                                this.refreshTokenInProgress = false;
                                this.auth.signOut();
                                return Observable.throw(error);
                            }));
                    }
                }
            )
        );
        /* pipe(
            tap(
                event => console.log(event),
                error => console.log(error)              
            )
        ); */
    }

    addAuthenticationToken(request) {
        // Get access token from Local Storage
        const accessToken = this.auth.getToken();

        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!accessToken) {
            return request;
        }

        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: this.auth.getTokenAuthorization()
            }
        });
    }
}