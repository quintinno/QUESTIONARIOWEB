import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorModuleComponent } from './module/home-administrador-module/home-administrador-module.component';
import { HomePublicoAlvoModuleComponent } from './module/home-publico-alvo-module/home-publico-alvo-module.component';
import { LoginModuleComponent } from './module/login-module/login-module.component';
import { SignupModuleComponent } from './module/signup-module/signup-module.component';
import { AdministradorGuard } from "./guard/administrador.guard";
import { PublicoAlvoGuard } from "./guard/publico-alvo.guard";
import { ProfileModuleComponent } from './module/profile-module/profile-module.component';
import { WelcomeModuleComponent } from './module/welcome-module/welcome-module.component';

const routes: Routes = [
  { path: "signup", component: SignupModuleComponent },
  { path: "login", component: LoginModuleComponent},
  { 
      path: "administrador", 
      component: HomeAdministradorModuleComponent, 
      canActivate: [AdministradorGuard],
      children: [
        {
          path: "",
          component: WelcomeModuleComponent
        },
        {
          path: "profile",
          component: ProfileModuleComponent
        }
      ]
  },
  { path: "home-publico-alvo", component: HomePublicoAlvoModuleComponent, canActivate: [PublicoAlvoGuard]},
  { path: "", redirectTo: "administrador", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
