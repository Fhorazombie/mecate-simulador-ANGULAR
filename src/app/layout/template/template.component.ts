import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './template.component.html',
})
export class TemplateComponent {
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
