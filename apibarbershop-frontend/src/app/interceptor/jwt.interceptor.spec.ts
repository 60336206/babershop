import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { jwtInterceptor } from './jwt.interceptor';
import { AuthService } from '../observable/auth/auth.service';
import { of, Observable } from 'rxjs';

describe('jwtInterceptor', () => {
  let authServiceSpy: jest.Mocked<AuthService>;

  beforeEach(() => {
    authServiceSpy = {
      getToken: jest.fn()
    } as any;

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });
  });

  const runInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    return TestBed.runInInjectionContext(() => jwtInterceptor(req, next));
  };

  it('should add Authorization header if token exists', (done) => {
    authServiceSpy.getToken.mockReturnValue('mock-token');
    const req = new HttpRequest('GET', '/test');
    
    const next: HttpHandlerFn = (modifiedReq) => {
      expect(modifiedReq.headers.get('Authorization')).toBe('Bearer mock-token');
      return of({} as HttpEvent<any>);
    };

    runInterceptor(req, next).subscribe(() => done());
  });

  it('should not add Authorization header if token does not exist', (done) => {
    authServiceSpy.getToken.mockReturnValue(null);
    const req = new HttpRequest('GET', '/test');
    
    const next: HttpHandlerFn = (modifiedReq) => {
      expect(modifiedReq.headers.has('Authorization')).toBe(false);
      return of({} as HttpEvent<any>);
    };

    runInterceptor(req, next).subscribe(() => done());
  });
});
