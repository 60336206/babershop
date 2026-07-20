import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideApiConfiguration } from './api/api-configuration';
import { environment } from './environments/environments';
import { providePrimeNG } from 'primeng/config';
import { jwtInterceptor } from './interceptor/jwt.interceptor';

import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { ConfirmationService, MessageService } from 'primeng/api';

const BarberPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.900}',
      600: '{slate.800}',
      700: '{slate.700}',
      800: '{slate.600}',
      900: '{slate.500}',
      950: '{slate.400}'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideApiConfiguration(environment.urlBase),
    providePrimeNG({
      theme: {
        preset: BarberPreset,
        options: { darkModeSelector: '.my-app-dark' }
      }
    }),
    MessageService,
    ConfirmationService
  ]
};
