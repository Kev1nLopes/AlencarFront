import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { HeadersService } from './headers.service';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private headersService: HeadersService
  ) {
    this.headers = this.headersService.getHeaders();
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${Environment.baseUrl}/products`, { headers: this.headers });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/produto/${id}`, { headers: this.headers });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${Environment.baseUrl}/produto/${id}`, { headers: this.headers });
  }

  desactive(id: number, produto: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/produto/${id}`, produto, { headers: this.headers });
  }

  update(produto: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/produto`, produto, { headers: this.headers });
  }

  create(produto: any): Observable<any> {
    return this.http.post(`${Environment.baseUrl}/produto`, produto, { headers: this.headers });
  }
}
