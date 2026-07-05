import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Theme from '@primeng/themes/material';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {definePreset} from '@primeng/themes';
import { getAuth, provideAuth } from '@angular/fire/auth';




const MyPreset = definePreset(Theme);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),

    provideRouter(routes, withComponentInputBinding()),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    }),

    provideHttpClient(withFetch()),
    provideAuth(() => getAuth()),

  ]
};