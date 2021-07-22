import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario-model';
import { AutenticadorService } from 'src/app/service/autenticador.service';

@Component({
  selector: 'app-profile-module',
  templateUrl: './profile-module.component.html',
  styleUrls: ['./profile-module.component.css']
})
export class ProfileModuleComponent implements OnInit {

  public usuarioModel: UsuarioModel = new UsuarioModel();

  constructor(
    private autenticadorService: AutenticadorService
  ) { }

  ngOnInit(): void {
    this.recuperarUsuarioLogado();
  }

  public recuperarUsuarioLogado() {
    this.usuarioModel = this.autenticadorService.recuperarUsuarioLogado();
  }

}
