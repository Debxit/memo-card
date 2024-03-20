import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';

import { GOOGLEPR, TOKEN } from './app.config';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${TOKEN}`,
      'x-goog-user-project': GOOGLEPR,
    },
  });
  return next(req);
};
