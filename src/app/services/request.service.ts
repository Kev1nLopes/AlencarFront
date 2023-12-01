import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { HeadersService } from './headers.service';
import { Request } from './types/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private headersService: HeadersService
  ) {
    this.headers = this.headersService.getHeaders();
  }

  getAll(): Observable<Request[]> {
    return this.http.get<Request[]>(`${Environment.baseUrl}/request`, { headers: this.headers });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/request/${id}`, { headers: this.headers });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${Environment.baseUrl}/request/${id}`, { headers: this.headers });
  }

  update(request: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/request`, request, { headers: this.headers });
  }

  create(request: any): Observable<any> {
    return this.http.post(`${Environment.baseUrl}/request`, request, { headers: this.headers });
  }
}
