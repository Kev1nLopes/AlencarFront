import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${Environment.baseUrl}/vehicle`)
  }
  getByid(id: number){
    return this.http.get(`${Environment.baseUrl}/vehicle/${id}`);
  }
  delete(id: number){
    return this.http.get(`${Environment.baseUrl}/vehicle/${id}`);
  }
  desactive(id: number, vehicle : any){
    return this.http.put(`${Environment.baseUrl}/vehicle/${id}`, vehicle)
  }
  update(vehicle: any){ // TODO CRIAR ESSE TIPO POR FAVOR
    return this.http.put(`${Environment.baseUrl}/vehicle`, vehicle);
  }
  create(vehicle: any){ 
    return this.http.post(`${Environment.baseUrl}/vehicle`, vehicle);
  }
}
