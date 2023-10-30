import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${Environment.baseUrl}/shipping-company`)
  }
  getByid(id: number){
    return this.http.get(`${Environment.baseUrl}/shipping-company/${id}`);
  }
  delete(id: number){
    return this.http.get(`${Environment.baseUrl}/shipping-company/${id}`);
  }
  desactive(id: number, shipping : any){
    return this.http.put(`${Environment.baseUrl}/shipping-company/${id}`, shipping)
  }
  update(shipping: any){ // TODO CRIAR ESSE TIPO POR FAVOR
    return this.http.put(`${Environment.baseUrl}/shipping-company`, shipping);
  }
  create(shipping: any){ 
    return this.http.post(`${Environment.baseUrl}/shipping-company`, shipping);
  }
}
