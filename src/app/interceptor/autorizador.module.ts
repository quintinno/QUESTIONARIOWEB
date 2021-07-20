import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AutorizadorInterceptor } from './autorizador.interceptor';

@NgModule({
 providers: [
  AutorizadorInterceptor, { provide: HTTP_INTERCEPTORS, useClass: AutorizadorInterceptor, multi: true, },
 ],
})
export class AutorizadorModule {}