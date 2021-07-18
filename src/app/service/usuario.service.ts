import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { UsuarioModel } from '../model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API = environment.urlquestionarioweb.concat("/usuario");

  constructor(
    private httpClient: HttpClient,
  ) { }

  public save(usuarioModel: UsuarioModel) : Observable<UsuarioModel> {
    return this.httpClient.post<UsuarioModel>(`${this.API}`, usuarioModel);
  }

}
