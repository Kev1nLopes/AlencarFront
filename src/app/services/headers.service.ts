// headers.service.ts
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {
  getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    let headers = new HttpHeaders();

    if (token) {
      const tokenWithoutQuotes = token.replace(/["]+/g, '');
      headers = headers.set('Authorization', `Bearer ${tokenWithoutQuotes}`);
    }

    return headers;
  }
}
