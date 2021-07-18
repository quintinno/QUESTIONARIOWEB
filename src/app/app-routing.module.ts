import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './module/home-module/home-module.component';
import { LoginModuleComponent } from './module/login-module/login-module.component';
import { SignupModuleComponent } from './module/signup-module/signup-module.component';

const routes: Routes = [
  { path: "signup", component: SignupModuleComponent, pathMatch: "full" },
  { path: "login", component: LoginModuleComponent},
  { path: "home", component: HomeModuleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
