import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TemplateComponent } from './layout/template/template.component';
import { ModuloEstructuraComponent } from './pages/modulo-estructura/modulo-estructura.component'; // 👈 aquí la nueva importación

export const routes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'modulo-estructura', component: ModuloEstructuraComponent }, // 👈 aquí la nueva ruta
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'callback', component: CallbackComponent },
];
