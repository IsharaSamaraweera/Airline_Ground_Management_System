import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    // ...
  
    setAuthToken(token: string): void {
      // Implement logic to store the token (e.g., in localStorage)
      localStorage.setItem('token', token);
    }
  
    getAuthToken(): string | null {
      // Implement logic to retrieve the stored token
      return localStorage.getItem('token');
    }
  
    isLoggedIn(): boolean {
      // Implement logic to check if the user is logged in (e.g., check the token's existence and validity)
      const token = this.getAuthToken();
      return token !== null && this.isTokenValid(token);
    }
  
    private isTokenValid(token: string): boolean {
      // Implement logic to check if the token is valid (e.g., check expiration)
      // Return true if valid, false otherwise
      return true;
    }

    apiUrl = 'http://localhost:3000'; 

    constructor(private http: HttpClient) {}

    login(credentials: { username: string; password: string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }
}


  