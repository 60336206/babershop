import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { guestGuard } from './guard/guest.guard';

export const routes: Routes = [

  // ── Pública ──
  {
    path: '',
    loadComponent: () => import('./page/web/home/home').then(m => m.Home)
  },
  {
    path: 'booking',
    loadComponent: () => import('./page/web/appointment-booking/appointment-booking').then(m => m.AppointmentBooking)
  },

  // ── Auth ──
  {
    path: 'auth/login',
    canActivate: [guestGuard],
    loadComponent: () => import('./page/auth/login/login').then(m => m.Login)
  },

  // ── Panel Admin (layout compartido) ──
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/admin/admin-layout').then(m => m.AdminLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./page/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'users',
        loadComponent: () => import('./page/users/users').then(m => m.Users)
      },
      {
        path: 'customers',
        loadComponent: () => import('./page/customers/customers').then(m => m.Customers)
      },
      {
        path: 'services',
        loadComponent: () => import('./page/services/services').then(m => m.Services)
      },
      {
        path: 'appointments',
        loadComponent: () => import('./page/appointments/appointments').then(m => m.Appointments)
      },
      {
        path: 'schedules',
        loadComponent: () => import('./page/schedules/schedules').then(m => m.Schedules)
      },
      {
        path: 'gallery',
        loadComponent: () => import('./page/gallery/gallery').then(m => m.Gallery)
      },
    ]
  },

  // ── Fallback ──
  { path: '**', redirectTo: '' }
];
