import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JJSRJYGA.js";

// src/app/observable/auth/auth.service.ts
var AuthService = class _AuthService {
  STORAGE_KEY = "barbershop_user";
  userSubject$ = new BehaviorSubject(this.loadFromStorage());
  user$() {
    return this.userSubject$.asObservable();
  }
  setUser(user) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    this.userSubject$.next(user);
  }
  getUser() {
    return this.userSubject$.value;
  }
  getToken() {
    return this.userSubject$.value?.token ?? null;
  }
  isLoggedIn() {
    return !!this.userSubject$.value?.token;
  }
  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.userSubject$.next(null);
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-66EMLGYO.js.map
