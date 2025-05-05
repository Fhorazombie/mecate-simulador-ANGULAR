import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_NAME = 'user_name';
  private readonly USER_EMAIL = 'user_email';
  private readonly API_URL = 'http://localhost:5000/auth/google'; // Flask endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    window.location.href = this.API_URL;
  }

  handleLoginCallback(params: any): void {
    const token = params['token'];
    const nombre = params['nombre'];
    const correo = params['correo'];

    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
      if (nombre) localStorage.setItem(this.USER_NAME, decodeURIComponent(nombre));
      if (correo) localStorage.setItem(this.USER_EMAIL, decodeURIComponent(correo));
    } else {
      console.error('No se recibió token en el callback 🥀');
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUserName(): string | null {
    return localStorage.getItem(this.USER_NAME);
  }

  getUserEmail(): string | null {
    return localStorage.getItem(this.USER_EMAIL);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUser(){
    return {
      nombre: this.getUserName(),
      correo: this.getUserEmail()
    };
  }
}
