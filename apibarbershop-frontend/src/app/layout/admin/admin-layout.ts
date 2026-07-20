import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../../observable/auth/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    MenuModule,
    ButtonModule,
    BadgeModule,
    TooltipModule
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router      = inject(Router);
  private routerSub!: Subscription;

  user = this.authService.getUser();
  sidebarCollapsed = false;
  currentRoute = '';

  navItems: NavItem[] = [];

  profileItems: MenuItem[] = [
    { label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.logout() }
  ];

  ngOnInit(): void {
    const allNavItems: NavItem[] = [
      { label: 'Dashboard',  icon: 'pi-chart-bar',   route: '/dashboard' },
      { label: 'Usuarios',   icon: 'pi-users',        route: '/users' },
      { label: 'Clientes',   icon: 'pi-id-card',      route: '/customers' },
      { label: 'Servicios',  icon: 'pi-tag',          route: '/services' },
      { label: 'Reservas',   icon: 'pi-calendar',     route: '/appointments' },
      { label: 'Horarios',   icon: 'pi-clock',        route: '/schedules' },
      { label: 'Galería',    icon: 'pi-images',       route: '/gallery' },
    ];

    if (this.user?.role === 'BARBER') {
      this.navItems = allNavItems.filter(item => item.route === '/dashboard' || item.route === '/appointments' || item.route === '/schedules');
    } else {
      this.navItems = allNavItems;
    }

    this.currentRoute = this.router.url;
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.currentRoute = e.urlAfterRedirects;
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  get userInitials(): string {
    if (!this.user) return 'A';
    return (this.user.firstName[0] ?? '') + (this.user.surName[0] ?? '');
  }

  get pageName(): string {
    const found = this.navItems.find(n => this.currentRoute.startsWith(n.route));
    return found?.label ?? 'Panel';
  }
}
