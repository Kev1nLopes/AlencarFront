import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${Environment.baseUrl}/clients`)
  }
  getByid(id: number){
    return this.http.get(`${Environment.baseUrl}/clients/${id}`);
  }
  delete(id: number){
    return this.http.get(`${Environment.baseUrl}/clients/${id}`);
  }
  desactive(id: number, cliente : any){
    return this.http.put(`${Environment.baseUrl}/clients/${id}`, cliente)
  }
  update(cliente: any){ // TODO CRIAR ESSE TIPO POR FAVOR
    return this.http.put(`${Environment.baseUrl}/clients`, cliente);
  }
  create(cliente: any){ 
    return this.http.post(`${Environment.baseUrl}/clients`, cliente);
  }
}
