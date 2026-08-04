import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../observable/auth/auth.service';

describe('authGuard', () => {
  let authServiceSpy: jest.Mocked<AuthService>;
  let routerSpy: jest.Mocked<Router>;

  beforeEach(() => {
    authServiceSpy = {
      isLoggedIn: jest.fn(),
      getUser: jest.fn()
    } as any;

    routerSpy = {
      navigate: jest.fn()
    } as any;

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
  });

  const runGuard = (url: string) => {
    const route = {} as ActivatedRouteSnapshot;
    const state = { url } as RouterStateSnapshot;
    return TestBed.runInInjectionContext(() => authGuard(route, state));
  };

  it('should navigate to login if not logged in', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(false);
    expect(runGuard('/dashboard')).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should allow access if logged in and not BARBER', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(true);
    authServiceSpy.getUser.mockReturnValue({ role: 'ADMIN' });
    expect(runGuard('/settings')).toBe(true);
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should allow BARBER access to allowed routes', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(true);
    authServiceSpy.getUser.mockReturnValue({ role: 'BARBER' });
    expect(runGuard('/dashboard')).toBe(true);
    expect(runGuard('/appointments')).toBe(true);
    expect(runGuard('/schedules')).toBe(true);
  });

  it('should deny BARBER access to restricted routes and navigate to dashboard', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(true);
    authServiceSpy.getUser.mockReturnValue({ role: 'BARBER' });
    expect(runGuard('/settings')).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should allow BARBER access to root or login without redirect', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(true);
    authServiceSpy.getUser.mockReturnValue({ role: 'BARBER' });
    expect(runGuard('/')).toBe(true);
    expect(runGuard('/auth/login')).toBe(true);
  });
});
