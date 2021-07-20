import { Component, OnInit } from '@angular/core';
import { AutenticadorService } from 'src/app/service/autenticador.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(
    public autenticadorService: AutenticadorService
  ) { }

  ngOnInit(): void {
    this.autenticadorService.autenticadorStatusSubject.asObservable().subscribe( response => {
      this.autenticadorService.recuperarUsuarioCorrente();
    });
  }

  public logout() {
    this.autenticadorService.logout();
    window.location.reload();
    this.autenticadorService.autenticadorStatusSubject.next(false);
  }

}
