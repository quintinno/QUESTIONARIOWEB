import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutenticadorModel } from 'src/app/model/autenticador-model';
import { AutenticadorService } from 'src/app/service/autenticador.service';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  public autenticadorModel: AutenticadorModel = new AutenticadorModel();

  public token: string = "";

  constructor(
    private matSnackBar: MatSnackBar,
    private autenticadorService: AutenticadorService
  ) { }

  ngOnInit(): void { }

  public realizarLoginUsuario() : void {
    if(this.isCamposValidos()) {
      this.autenticadorService.recuperarTokenAutenticador(this.autenticadorModel).subscribe(
        (response: any) => {
          this.autenticadorModel.token = response;
          this.autenticadorService.registrarTokenLocalStorage(this.autenticadorModel.token);
      }, 
      error => {
        this.error(error);
      });
    }
  }

  public isCamposValidos() : boolean {
    if(this.autenticadorModel.username == "" || this.autenticadorModel.username == null || this.autenticadorModel.username == undefined) {
      this.apresentarAlerta("O campo username deve ser informado!");
      return;
    }
    if(this.autenticadorModel.password == "" || this.autenticadorModel.password == null || this.autenticadorModel.password == undefined) {
      this.apresentarAlerta("O campo Senha deve ser informado!");
      return;
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
      horizontalPosition: "right"
    });
  }

}
