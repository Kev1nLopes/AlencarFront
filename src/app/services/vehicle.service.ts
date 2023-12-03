import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { HeadersService } from './headers.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private headersService: HeadersService
  ) {
    this.headers = this.headersService.getHeaders();
  }

  getAll(): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/vehicle`, { headers: this.headers });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${Environment.baseUrl}/vehicle/${id}`, { headers: this.headers });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${Environment.baseUrl}/vehicle/${id}`, { headers: this.headers });
  }

  desactive(vehicle: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/vehicle/${vehicle.id}`, vehicle, { headers: this.headers });
  }

  update(vehicle: any): Observable<any> {
    return this.http.put(`${Environment.baseUrl}/vehicle`, vehicle, { headers: this.headers });
  }

  create(vehicle: any): Observable<any> {
    return this.http.post(`${Environment.baseUrl}/vehicle/new`, vehicle, { headers: this.headers });
  }
}
