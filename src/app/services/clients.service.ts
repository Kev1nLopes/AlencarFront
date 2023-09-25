import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${Environment.baseUrl}/cliente`)
  }
  getByid(id: number){
    return this.http.get(`${Environment.baseUrl}/cliente/${id}`);
  }
  delete(id: number){
    return this.http.get(`${Environment.baseUrl}/cliente/${id}`);
  }
  desactive(id: number, cliente : any){
    return this.http.put(`${Environment.baseUrl}/cliente/${id}`, cliente)
  }
  update(cliente: any){ // TODO CRIAR ESSE TIPO POR FAVOR
    return this.http.put(`${Environment.baseUrl}/cliente`, cliente);
  }
  create(cliente: any){ 
    return this.http.post(`${Environment.baseUrl}/cliente`, cliente);
  }
}
