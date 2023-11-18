import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private static readonly key = "JWT_KEY";


  login(data: any){
    return this.http.post(`${Environment.baseUrl}/login`, data)
  }

  get isLogged(){
    return !!this.jwt;
  }

  get jwt(): string{
    return sessionStorage.getItem(AuthService.key) ?? '';
  }

}
