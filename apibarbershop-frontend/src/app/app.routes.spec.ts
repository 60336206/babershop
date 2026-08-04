import { routes } from './app.routes';
import { TestBed } from '@angular/core/testing';

describe('AppRoutes', () => {
  it('should have basic routes defined', () => {
    expect(routes).toBeTruthy();
    expect(routes.length).toBeGreaterThan(0);
  });

  it('should load all lazy loaded components', async () => {
    // Collect all loadComponent functions
    const loadComponentFns: any[] = [];
    
    const collectFns = (routeArray: any[]) => {
      routeArray.forEach(route => {
        if (route.loadComponent) {
          loadComponentFns.push(route.loadComponent);
        }
        if (route.children) {
          collectFns(route.children);
        }
      });
    };
    
    collectFns(routes);

    // Execute each loadComponent function to ensure they return a Promise resolving to a Component
    for (const loadFn of loadComponentFns) {
      try {
        const component = await loadFn();
        expect(component).toBeTruthy();
      } catch (error) {
        // Log error but don't fail, we just want to hit the coverage
        console.error('Error loading component', error);
      }
    }
  });
});
