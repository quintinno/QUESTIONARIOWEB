import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioModel } from "../../model/usuario-model";
import { UsuarioService } from "../../service/usuario.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-module',
  templateUrl: './signup-module.component.html',
  styleUrls: ['./signup-module.component.css']
})
export class SignupModuleComponent implements OnInit {

  public usuarioModel: UsuarioModel = new UsuarioModel();

  public contrasenha: string = "";

  constructor(
    private usuarioService: UsuarioService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void { }

  public save() {
    if(this.isValido()) {
      this.usuarioService.save(this.usuarioModel).subscribe(
        response => {
          this.usuarioModel = response;
          Swal.fire("Questionário", "Usuário " + this.usuarioModel.identificador + " Cadastrado com Sucesso!", "success");
          this.apresentarAlerta("Usuário Cadastrado com Sucesso!");
          this.limparCamposFormulario();
        }, 
        error => {
          this.error(error);
        });
    }
  }

  private isValido() : boolean {
    if(this.usuarioModel.identificador == "" || this.usuarioModel.identificador == null || this.usuarioModel.identificador == undefined) { 
      this.apresentarAlerta("O campo Usuário é Obrigatório!");
      return false; 
    }
    if(this.usuarioModel.senha == null || this.usuarioModel.senha == "" || this.usuarioModel.senha == undefined) {
      this.apresentarAlerta("O campo Senha é Obrigatório!");
      return false; 
    }
    if(this.usuarioModel.senha != this.contrasenha) {
      this.apresentarAlerta("As senhas devem ser idênticas!");
      return false; 
    }
    return true;
  }

  public apresentarAlerta(mensagem) {
    this.matSnackBar.open(mensagem, "Fechar", {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }

  private error(error) {
    this.apresentarAlerta("Não foi possível cadastrar seus dados no momento. Tente novamente mais tarde!");
    return console.error("ERROR: ", JSON.stringify(error));
  }

  private limparCamposFormulario() {
    this.usuarioModel.codigo = null;
    this.usuarioModel.identificador = null;
    this.usuarioModel.senha = null;
    this.contrasenha = null;
    window.location.reload();
  }

}
