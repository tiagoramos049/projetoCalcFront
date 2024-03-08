import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class calculatorService {
    private baseUrl = 'https://localhost:44323/v1/account';

  constructor(private http: HttpClient) {}

  calculate(value1: number, value2: number, operation: string): Observable<number> {
    const calculationRequest = { value1, value2, operation };
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<number>(`${this.baseUrl}/calculate`, calculationRequest, { headers });
  }
}