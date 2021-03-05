import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  
  lista: Departamentos[] = []
  
    

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    ativo : new FormControl('', [Validators.required]),
    cargo : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    departamento : new FormControl('', [Validators.required]),
  })

  
  
  constructor(
    private service : BuscaDepartamentosService, 
    private serviceUsuario : BuscaUsuarariosService,
    private router : Router
    ) { }
  
  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(
      (resposta) => this.lista = resposta
    );
  }
  
  cadastrarDepart(): void{  
    
    let depart : Departamentos;
    let colab : Colaborador

    this.service.getDepartamentoById(this.formulario.value.departamento).subscribe(
      (resposta) =>{ 
        depart = resposta, 
        colab = new Colaborador(
          this.formulario.value.ativo,
          this.formulario.value.nome,
          this.formulario.value.cargo,
          this.formulario.value.telefone,
          depart),
          this.serviceUsuario.postUsuario(colab).subscribe(
          () => this.router.navigate(['home' ,'colaboradores' ])
          );
      }) 
  }
  
}
