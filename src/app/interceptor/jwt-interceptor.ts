import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";
import { Environment } from "../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class JwtAuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn = this.auth.isLogged;
        const isToServer = req.url.startsWith(Environment.baseUrl);

        if (isLoggedIn && isToServer) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${this.auth.jwt}` }
            })
        }
        return next.handle(req);
    }
}
