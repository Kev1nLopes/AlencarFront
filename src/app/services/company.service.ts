import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { HeadersService } from './headers.service';
import { ShippingCompany } from './types/shippingCompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private headersService: HeadersService
  ) {
    this.headers = this.headersService.getHeaders();
  }

  getAll(): Observable<ShippingCompany[]> {
    return this.http.get<ShippingCompany[]>(`${Environment.baseUrl}/shipping-company`, { headers: this.headers });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/shipping-company/${id}`, { headers: this.headers });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${Environment.baseUrl}/shipping-company/${id}`, { headers: this.headers });
  }

  desactivate(shipping: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/shipping-company/${shipping.id}`, shipping, { headers: this.headers });
  }

  update(shipping: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/shipping-company`, shipping, { headers: this.headers });
  }

  create(shipping: any): Observable<any> {
    return this.http.post(`${Environment.baseUrl}/shipping-company/new`, shipping, { headers: this.headers });
  }
}
