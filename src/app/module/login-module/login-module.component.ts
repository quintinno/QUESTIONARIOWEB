import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario-model';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  public usuarioModel: UsuarioModel = new UsuarioModel();

  constructor() { }

  ngOnInit(): void { }

  public realizarLoginUsuario() : void {
    console.log("Realizar Login!!!");
  }

}
