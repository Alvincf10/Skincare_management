import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authservice = this.inject.get(AuthService);
    request = request.clone({
      setHeaders: {
        Authorization  : `Bearer ${localStorage.getItem('token')}`
      }
    });
    return next.handle(request).pipe(
      );
  }
}
