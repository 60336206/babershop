import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { guestGuard } from './guest.guard';
import { AuthService } from '../observable/auth/auth.service';

describe('guestGuard', () => {
  let authServiceSpy: jest.Mocked<AuthService>;
  let routerSpy: jest.Mocked<Router>;

  beforeEach(() => {
    authServiceSpy = {
      isLoggedIn: jest.fn()
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

  const runGuard = () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    return TestBed.runInInjectionContext(() => guestGuard(route, state));
  };

  it('should navigate to dashboard if logged in', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(true);
    expect(runGuard()).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should allow access if not logged in', () => {
    authServiceSpy.isLoggedIn.mockReturnValue(false);
    expect(runGuard()).toBe(true);
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
