import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpsInterceptor } from './https.interceptor';
import { LoaderInterceptor } from './loader.interceptor';
import { ConvertInterceptor } from './convert.interceptor';

export const httpInterceptorProviders = [
    // export const httpInterceptorProviders: [{ provide: typeof HTTP_INTERCEPTORS; useClass: any; multi: any }] = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true }
];
