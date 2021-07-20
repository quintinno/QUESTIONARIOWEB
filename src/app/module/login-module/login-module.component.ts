import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutenticadorModel } from 'src/app/model/autenticador-model';
import { UsuarioModel } from 'src/app/model/usuario-model';
import { AutenticadorService } from 'src/app/service/autenticador.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  public autenticadorModel: AutenticadorModel = new AutenticadorModel();

  public usuarioModel: UsuarioModel = new UsuarioModel();

  public token: string = "";

  constructor(
    private matSnackBar: MatSnackBar,
    private autenticadorService: AutenticadorService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public realizarLoginUsuario(): void {
    if (this.isCamposValidos()) {
      this.usuarioModel.identificador = this.autenticadorModel.username;
      this.usuarioModel.chave = this.autenticadorModel.password;
      this.autenticadorService.gerarTokenAutenticador(this.autenticadorModel).subscribe((response: any) => {
        this.autenticadorService.registrarTokenLocalStorage(response.token);
        this.usuarioService.recuperarUsuario(this.usuarioModel).subscribe((response: any) => {
          this.autenticadorService.registrarUsuarioLocalStorage(response);
          debugger;
          if (this.autenticadorService.recuperarPerfilUsuario() == "ADMINISTRADOR") {
            return this.redirecionarPaginaHomeAdministrador();
          }
          if ((this.autenticadorService.recuperarPerfilUsuario() == "PUBLICO_ALVO")) {
            return this.redirecionarPaginaHomePublicoAlvo();
          } else {
            this.autenticadorService.logout();
          }
        }, error => {
          this.error(error);
        });
      }, error => {
        this.error(error);
      });
    }
  }

  public isCamposValidos() : boolean {
    if(this.autenticadorModel.username == "" || this.autenticadorModel.username == null || this.autenticadorModel.username == undefined) {
      this.apresentarAlerta("O campo Username deve ser informado!");
      return false;
    }
    if(this.autenticadorModel.password == "" || this.autenticadorModel.password == null || this.autenticadorModel.password == undefined) {
      this.apresentarAlerta("O campo Password deve ser informado!");
      return false;
    }
    return true;
  }

  private error(error) {
    this.apresentarAlerta("Não foi possível autenticar seus dados no momento. Tente novamente mais tarde!");
    return console.error("ERROR: ", JSON.stringify(error));
  }

  private apresentarAlerta(mensagem) {
    this.matSnackBar.open(mensagem, "Fechar", {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "right",
      announcementMessage: "true",
      direction: "rtl"
    });
  }

  public redirecionarPaginaHomeAdministrador() {
    this.router.navigate(["/home-administrador"]);
  }

  public redirecionarPaginaHomePublicoAlvo() {
    return window.location.href = "/home-publico-alvo";
  }

}
