import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTheming, themingInitializer } from '@fundamental-ngx/core/theming';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTheming({ defaultTheme: 'sap_horizon', changeThemeOnQueryParamChange: true }),
    themingInitializer(),
  ],
};
