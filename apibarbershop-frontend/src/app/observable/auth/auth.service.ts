import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AuthUser {
  token: string;
  firstName: string;
  surName: string;
  email: string;
  role: string;
  photo: string;
  idUser: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'barbershop_user';
  private readonly userSubject$ = new BehaviorSubject<AuthUser | null>(this.loadFromStorage());

  public user$(): Observable<AuthUser | null> {
    return this.userSubject$.asObservable();
  }

  public setUser(user: AuthUser): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    this.userSubject$.next(user);
  }

  public getUser(): AuthUser | null {
    return this.userSubject$.value;
  }

  public getToken(): string | null {
    return this.userSubject$.value?.token ?? null;
  }

  public isLoggedIn(): boolean {
    return !!this.userSubject$.value?.token;
  }

  public logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.userSubject$.next(null);
  }

  private loadFromStorage(): AuthUser | null {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
