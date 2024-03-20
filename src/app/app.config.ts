import { ApplicationConfig } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';

//update token https://cloud.google.com/sdk/gcloud/reference/auth/print-access-token
export const TOKEN =
  'ya29.a0Ad52N39CwHkH3gP2lcRHZMPBqlbIYZJCUyhCzseN8AbHz2f1Qz1rpuJ_dV_26YbFx6VhklIHMHWjsKpnBEGZMAKTmJxn4L0J3w1gfrZAsoGamcn-sSh_E8yjnHiFk1nulvqJbsAeYCkUO0ABSthB-zuJgDQwMg0Yse_1QhISrk8MsAGaSnDQCh6-pBglltVBSthTX5e1T4i5zq0eQhmYe5LpRiDEi9YTor52wE9GU71K_gMhk_v7KQGMeN0P_P8kGf97WyNP3Nxb4YvCgMRYF7xNxwXN3Mc94F81W4xLcH4-BeAQnb-JwLojCOSavYkaf3JNE_LgTIAagGC3AX0A1Q6wrDdzLUCqPjv26EVVD9HoznCTz_xYIXob7mIuMqEd7SstcTbZLfZB0RJnU5CBMIess1QBq4PraCgYKAZYSARISFQHGX2Mi5qjDhvrN6Fs4KDJxwOk_IQ0423';
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
