import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const tokenWithoutQuotes = token.replace(/["]+/g, '');

      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${tokenWithoutQuotes}`
      });
    } else {
      this.headers = new HttpHeaders();
    }
  }

  getAll() {
    return this.http.get(`${Environment.baseUrl}/products`, { headers: this.headers });
  }

  getById(id: number) {
    return this.http.get(`${Environment.baseUrl}/produto/${id}`);
  }

  delete(id: number) {
    return this.http.get(`${Environment.baseUrl}/produto/${id}`);
  }

  desactive(id: number, produto: any) {
    return this.http.put(`${Environment.baseUrl}/produto/${id}`, produto);
  }

  update(produto: any) {
    // TODO: Criar esse tipo conforme necessário
    return this.http.put(`${Environment.baseUrl}/produto`, produto);
  }

  create(produto: any) {
    return this.http.post(`${Environment.baseUrl}/produto`, produto);
  }
}
