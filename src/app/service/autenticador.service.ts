import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutenticadorModel } from '../model/autenticador-model';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  private API = environment.urlquestionarioweb;

  public autenticadorStatusSubject = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private httpBackend: HttpBackend,
  ) { 
    this.httpClient = new HttpClient(httpBackend); // Ignora o Interceptor
  }

  public verificarUsuarioAtivo() {
    return this.httpClient.get(`${this.API}/usuario-ativo`);
  }

  public recuperarUsuarioCorrente() {
    return this.httpClient.get(`${this.API}/usuario-corrente`);
  }

  public gerarTokenAutenticador(autenticadorModel: AutenticadorModel) : Observable<AutenticadorModel> {
    return this.httpClient.post<AutenticadorModel>(`${this.API}/autenticador`, autenticadorModel);
  }

  public registrarTokenLocalStorage(token : string) : boolean {
    localStorage.setItem("QUESTIONARIO_TOKEN", token);
    this.autenticadorStatusSubject.next(true);
    return true;
  }

  public isLoginAtivo() {
    let TOKEN = localStorage.getItem("QUESTIONARIO_TOKEN");
    if(TOKEN == null || TOKEN == undefined || TOKEN == "") {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem("QUESTIONARIO_TOKEN");
    localStorage.removeItem("QUESTIONARIO_USUARIO");
    return true;
  }

  public recuperarToken() : String {
    return localStorage.getItem("QUESTIONARIO_TOKEN");
  }

  public registrarUsuarioLocalStorage(autenticadorModel: AutenticadorModel) {
    localStorage.setItem("QUESTIONARIO_USUARIO", JSON.stringify(autenticadorModel));
  }

  public recuperarUsuarioLocalStorage() {
    let autenticador = localStorage.getItem("QUESTIONARIO_USUARIO");
    if(autenticador != null) {
      return JSON.parse(autenticador);
    } else {
      this.logout();
      return null;
    }
  }

  public recuperarPerfilUsuario() {
    let usuarioModel = this.recuperarUsuarioLocalStorage();
    return usuarioModel.authorities[0].authority;
  }

  public recuperarUsuarioLogado() {
    return this.recuperarUsuarioLocalStorage();
  }

}
