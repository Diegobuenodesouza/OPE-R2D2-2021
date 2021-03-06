import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from "../../../_model/Departamentos";

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  listaDepartamentos: any = []
  listaUsuario: any[] = []
  id: number = 1

  constructor(
    private buscaUsuario : BuscaUsuarariosService,
    private buscaDepartamentos: BuscaDepartamentosService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.buscarUsuario(),
    this.buscarDepartamentos()
   
  }

  buscarDepartamentos(){
    this.buscaDepartamentos.getDepartamentos().subscribe(
      (resposta) => this.listaDepartamentos = resposta
    );  
  }

  buscarUsuario(){
    this.buscaUsuario.getUsuarios().subscribe(
      (resposta) => this.listaUsuario = resposta
    );  
  }

  passarId(idDepartamento: number){
    this.id = idDepartamento;
  }

  contarColaborador(id: number) : number{
    let sum = 0;
    this.listaUsuario.forEach((colaborador: Colaborador) => {
      if (colaborador.departamento.id == id) {
        sum += 1;
      }
    })    
    return sum;
  }

  cadastrarDep(){
    this.router.navigate(['home' , 'cadastrardepart'])
  }
}
