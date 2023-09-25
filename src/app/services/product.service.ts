import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${Environment.baseUrl}/produto`)
  }
  getByid(id: number){
    return this.http.get(`${Environment.baseUrl}/produto/${id}`);
  }
  delete(id: number){
    return this.http.get(`${Environment.baseUrl}/produto/${id}`);
  }
  desactive(id: number, produto : any){
    return this.http.put(`${Environment.baseUrl}/produto/${id}`, produto)
  }
  update(produto: any){ // TODO CRIAR ESSE TIPO POR FAVOR
    return this.http.put(`${Environment.baseUrl}/produto`, produto);
  }
  create(produto: any){ 
    return this.http.post(`${Environment.baseUrl}/produto`, produto);
  }
}
