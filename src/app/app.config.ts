import { ApplicationConfig } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';

//update token https://cloud.google.com/sdk/gcloud/reference/auth/print-access-token
export const TOKEN =
  'ya29.a0Ad52N3_4lRpZJxMKruFgIkTu7wt4Y0TkuLwuAIspIueqXtmt92egKaYubtYJLwkGJadkfxEKv4_JNKmyLXfo5wfRVVsYmCED6FyA9UObzgMrc4AV_Egz-CTNweiD1XWC-isAi6imspDgo-57XOWJoqsEpX34RVMAsMQFj4hHL6UPgZBaGiCxKOBIwOgZxDO4U1qxwyTiLO4fsmXcEWMoSTOeJpmeAQLBlrIyvUU33kGoxQVj8K_3wSU5NHIWzibDnzbBadhoZm7cw5bLWtDDCpLM4D6qHUwJmGbH7aslUIBVC8uaHDFqX-z2hOnq_F3r2rUUXGa9ktQzXzyQmmN8cYnMkflJYTHuHruvNHe1My5tizEK7jcWIZodujOuJFT9RQmo6M3I8toYvGLikJWVdXGdAEubnWHFaCgYKAVMSARISFQHGX2MiYtd04wxEQz49qoKUxVC-TA0423';
export const GOOGLEPR = 'memo-cards-413720';
export const TARGET_LANG = 'ru';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideProtractorTestingSupport(),
  ],
};
