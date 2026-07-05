import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(credentials: any) {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}