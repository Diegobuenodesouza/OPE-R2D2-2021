import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home/home.component';
import { HeaderComponent } from './login/home/header/header.component';
import { FooterComponent } from './login/home/footer/footer.component';
import { ContentComponent } from './login/home/content/content.component';
import { DepartamentoComponent } from './login/home/departamento/departamento.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarDepartamentoComponent } from './login/home/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColaboradoresComponent } from './login/home/colaboradores/colaboradores.component';
import { CadastrarUsuarioComponent } from './login/home/colaboradores/cadastrar-usuario/cadastrar-usuario.component';
import { EditarDepartamentoComponent } from './login/home/departamento/editar-departamento/editar-departamento.component';
import { DeletarDepartamentoComponent } from './login/home/departamento/deletar-departamento/deletar-departamento.component';
import { EditarUsuarioComponent } from './login/home/colaboradores/editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './login/home/colaboradores/deletar-usuario/deletar-usuario.component';
import { ProdutosComponent } from './login/home/produtos/produtos.component';
import { CadastrarProdutoComponent } from './login/home/produtos/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './login/home/produtos/editar-produto/editar-produto.component';
import { DeletarProdutoComponent } from './login/home/produtos/deletar-produto/deletar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DepartamentoComponent,
    CadastrarDepartamentoComponent,
    ColaboradoresComponent,
    CadastrarUsuarioComponent,
    EditarDepartamentoComponent,
    DeletarDepartamentoComponent,
    EditarUsuarioComponent,
    DeletarUsuarioComponent,
    ProdutosComponent,
    CadastrarProdutoComponent,
    EditarProdutoComponent,
    DeletarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
