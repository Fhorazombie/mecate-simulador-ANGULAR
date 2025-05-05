import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../services/progress.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  user: { nombre: string | null; correo: string | null } | null = null;
  progreso: any[] = [];
  modulos = [
    'Levantamiento de requerimientos',
    'Estructura del proyecto y control de versiones',
    'Componentes reutilizables',
    'CRUD de entidades',
    'Login y seguridad básica',
    'Internacionalización (i18n)',
    'Pruebas manuales y validaciones',
    'Despliegue de aplicación',
    'Documentación técnica del proyecto',
  ];

  constructor(private auth: AuthService, private progressService: ProgressService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    
    this.progressService.getProgress().subscribe(data => {
      this.progreso = data;
    });
  }

  getEstado(modulo: string): 'completado' | 'pendiente' | 'en curso' {
    const progresoModulo = this.progreso.find((p) => p.modulo === modulo);
    if (progresoModulo) {
      return progresoModulo.estado;
    } else {
      return 'pendiente';
    }
  }
}
