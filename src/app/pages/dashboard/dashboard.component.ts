import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="text-white p-8">
      <h1 class="text-3xl mb-4">🌙 Bienvenido {{ user?.nombre }}</h1>
      <p class="text-gray-400">Correo: {{ user?.correo }}</p>

      <button
        class="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        (click)="logout()"
      >
        Cerrar sesión
      </button>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  user: { nombre: string | null; correo: string | null } | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/callback']);
    } else {
      this.user = this.auth.getUser();
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
