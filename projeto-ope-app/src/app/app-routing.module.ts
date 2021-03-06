import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './login/home/colaboradores/cadastrar-usuario/cadastrar-usuario.component';
import { ColaboradoresComponent } from './login/home/colaboradores/colaboradores.component';
import { EditarUsuarioComponent } from './login/home/colaboradores/editar-usuario/editar-usuario.component';
import { ContentComponent } from './login/home/content/content.component';
import { CadastrarDepartamentoComponent } from './login/home/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { DeletarDepartamentoComponent } from './login/home/departamento/deletar-departamento/deletar-departamento.component';
import { DepartamentoComponent } from './login/home/departamento/departamento.component';
import { EditarDepartamentoComponent } from './login/home/departamento/editar-departamento/editar-departamento.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' , component : LoginComponent},
  {path: 'home' , component : HomeComponent, children: [
    {path: '' , component : ContentComponent},
    { path: 'departamentos' , component: DepartamentoComponent},
    {path: 'cadastrardepart' , component: CadastrarDepartamentoComponent},
    {path: 'colaboradores' , component: ColaboradoresComponent},
    {path: 'cadastrarusuario', component: CadastrarUsuarioComponent},
    { path: 'editardepart/:id' , component: EditarDepartamentoComponent},
    {path: 'deletardepart/:id',  component: DeletarDepartamentoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
