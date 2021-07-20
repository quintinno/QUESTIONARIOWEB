import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilEnumeration } from '../enumeration/perfil-enumeration';
import { AutenticadorService } from '../service/autenticador.service';

@Injectable({
  providedIn: 'root'
})
export class AplicadorGuard implements CanActivate {

  constructor(
    private autenticadorService: AutenticadorService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.autenticadorService.isLoginAtivo() && this.autenticadorService.recuperarPerfilUsuario() == PerfilEnumeration.PERFIL_APLICADOR) {
      return true;
    }
    this.redirecionarPaginaLogin();
    return false;
  }

  public redirecionarPaginaLogin() {
    this.router.navigate(["/login"]);
  }
  
}