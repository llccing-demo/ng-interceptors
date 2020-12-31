import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // https://jsonplaceholder.typicode.com/albums/1
        if (!req.url.includes('albums')) {
            return next.handle(req);
        }

        console.log('loaderInterceptor');
    }
}
