import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly API_URL = 'http://localhost:5000/auth/google'; // Flask endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    window.location.href = this.API_URL;
  }

  handleLoginCallback(response: any): void {
    const token = response?.access_token;
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.router.navigate(['/dashboard']);
    }
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
