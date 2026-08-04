import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';

import { AuthService } from '../../observable/auth/auth.service';
import { Api } from '../../api/api';
import { apisettinggetone } from '../../api/functions';

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
  private readonly api         = inject(Api);
  private readonly confirmationService = inject(ConfirmationService);
  private routerSub!: Subscription;

  user = this.authService.getUser();
  sidebarCollapsed = globalThis.window.innerWidth <= 768;
  currentRoute = '';
  logoBase64: string = 'logo.png';
  showUserMenu = false;

  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.sidebarCollapsed = globalThis.window.innerWidth <= 768;

    this.api.invoke(apisettinggetone as any, {}).then((res: any) => {
      const data = typeof res === 'string' ? JSON.parse(res) : res;
      if (data?.type === 'success' && data.setting?.logo) {
        this.logoBase64 = data.setting.logo;
      }
    });

    const allNavItems: NavItem[] = [
      { label: 'Dashboard',  icon: 'pi-chart-bar',   route: '/dashboard' },
      { label: 'Usuarios',   icon: 'pi-users',        route: '/users' },
      { label: 'Clientes',   icon: 'pi-id-card',      route: '/customers' },
      { label: 'Servicios',  icon: 'pi-tag',          route: '/services' },
      { label: 'Reservas',   icon: 'pi-calendar',     route: '/appointments' },
      { label: 'Horarios',   icon: 'pi-clock',        route: '/schedules' },
      { label: 'Galería',    icon: 'pi-images',       route: '/gallery' },
      { label: 'Configuración', icon: 'pi-cog',       route: '/settings' },
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
      if (globalThis.window.innerWidth <= 768) {
        this.sidebarCollapsed = true;
      }
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

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  logout(): void {
    this.showUserMenu = false;
    this.confirmationService.confirm({
      message: '¿Seguro que deseas cerrar sesión?',
      header: 'Cerrar sesión',
      icon: 'pi pi-sign-out',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Sí, salir', severity: 'danger' },
      accept: () => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
    });
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
