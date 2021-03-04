import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './login/home/content/content.component';
import { CadastrarDepartamentoComponent } from './login/home/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { DepartamentoComponent } from './login/home/departamento/departamento.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' , component : LoginComponent},
  {path: 'home' , component : HomeComponent, children: [
    {path: '' , component : ContentComponent},
    { path: 'departamentos' , component: DepartamentoComponent},
    {path: 'cadastrardepart' , component: CadastrarDepartamentoComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
