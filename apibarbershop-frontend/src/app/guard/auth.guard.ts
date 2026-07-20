import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../observable/auth/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  const user = authService.getUser();
  if (user?.role === 'BARBER') {
    const allowed = ['/dashboard', '/appointments', '/schedules'];
    const isAllowed = allowed.some(a => state.url.startsWith(a));
    if (!isAllowed && state.url !== '/' && state.url !== '/auth/login') {
      router.navigate(['/dashboard']);
      return false;
    }
  }

  return true;
};
