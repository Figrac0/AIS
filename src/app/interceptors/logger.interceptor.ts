import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const started = Date.now();
  console.log('API ->', req.method, req.urlWithParams, req.body ?? '');

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const ms = Date.now() - started;
          console.log('API <-', event.status, req.method, req.url, `(${ms} ms)`, event.body);
        }
      },
      error: (err) => {
        const ms = Date.now() - started;
        console.error(
          'API (net)',
          req.method,
          req.urlWithParams,
          `(${ms} ms)`,
          err.status,
          err.message
        );
      },
    })
  );
};
