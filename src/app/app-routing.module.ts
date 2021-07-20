import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorModuleComponent } from './module/home-administrador-module/home-administrador-module.component';
import { HomePublicoAlvoModuleComponent } from './module/home-publico-alvo-module/home-publico-alvo-module.component';
import { LoginModuleComponent } from './module/login-module/login-module.component';
import { SignupModuleComponent } from './module/signup-module/signup-module.component';
import { AdministradorGuard } from "./guard/administrador.guard";
import { PublicoAlvoGuard } from "./guard/publico-alvo.guard";

const routes: Routes = [
  { path: "signup", component: SignupModuleComponent },
  { path: "login", component: LoginModuleComponent},
  { path: "home-administrador", component: HomeAdministradorModuleComponent, canActivate: [AdministradorGuard]},
  { path: "home-publico-alvo", component: HomePublicoAlvoModuleComponent, canActivate: [PublicoAlvoGuard]},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
