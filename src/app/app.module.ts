import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { AutorizadorInterceptor } from "./interceptor/autorizador.interceptor";
import { AutorizadorModule } from "./interceptor/autorizador.module";
import { HomeAdministradorModuleComponent } from './module/home-administrador-module/home-administrador-module.component';
import { HomePublicoAlvoModuleComponent } from './module/home-publico-alvo-module/home-publico-alvo-module.component';
import { LoginModuleComponent } from './module/login-module/login-module.component';
import { SignupModuleComponent } from './module/signup-module/signup-module.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupModuleComponent,
    LoginModuleComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    HomeAdministradorModuleComponent,
    HomePublicoAlvoModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AutorizadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
