import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpsInterceptor } from './https.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
];
