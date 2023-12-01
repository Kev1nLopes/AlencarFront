import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { HeadersService } from './headers.service';
import { Client } from './types/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private headersService: HeadersService
  ) {
    this.headers = this.headersService.getHeaders();
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${Environment.baseUrl}/clients`, { headers: this.headers });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/clients/${id}`, { headers: this.headers });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${Environment.baseUrl}/clients/${id}`, { headers: this.headers });
  }

  desactivate(id: number, client: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/clients/${id}`, client, { headers: this.headers });
  }

  update(client: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/clients`, client, { headers: this.headers });
  }

  create(client: any): Observable<any> {
    return this.http.post(`${Environment.baseUrl}/clients`, client, { headers: this.headers });
  }
}
