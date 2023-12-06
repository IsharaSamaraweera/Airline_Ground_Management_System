import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
    setAuthToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    getAuthToken(): string | null {
      return localStorage.getItem('token');
    }
  
    isLoggedIn(): boolean {
      const token = this.getAuthToken();
      return token !== null && this.isTokenValid(token);
    }
  
    private isTokenValid(token: string): boolean {
      
      return true;
    }

    apiUrl = 'http://localhost:3000'; 

    constructor(private http: HttpClient) {}

    login(credentials: { username: string; password: string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }
}


  