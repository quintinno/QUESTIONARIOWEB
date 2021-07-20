import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticadorService } from '../service/autenticador.service';

@Injectable()
export class AutorizadorInterceptor implements HttpInterceptor {

  constructor( private autenticadorService: AutenticadorService ) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenLocalStorage = this.autenticadorService.recuperarToken();
    httpRequest = httpRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenLocalStorage}`
      }
     });
    return next.handle(httpRequest);
  }

}
