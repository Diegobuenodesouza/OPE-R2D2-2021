import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  
  usuario : Colaborador = new Colaborador(false, '', '', '', new Departamentos(''));
  lista: Departamentos[] = []
  
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    ativo : new FormControl('', [Validators.required]),
    cargo : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    departamento : new FormControl('', [Validators.required]),
  })
  
  constructor(
    private route: ActivatedRoute,
    private service: BuscaUsuarariosService,
    private serviceDepartamento: BuscaDepartamentosService
    ) { }
    
    ngOnInit(): void {
      let depart : Departamentos;
      
      this.route.params.subscribe((parametrs: Params) => {

        this.service.getUsuarioById(parametrs.id).subscribe(
          (resposta) => { this.usuario = resposta ,
            
            this.serviceDepartamento.getDepartamentoById(resposta.departamento.id).subscribe(
              (resposta) =>  {depart = resposta, 
                this.formulario.controls.nome.setValue(this.usuario.nome),
                this.formulario.controls.ativo.setValue(this.usuario.ativo),
                this.formulario.controls.cargo.setValue(this.usuario.cargo),
                this.formulario.controls.telefone.setValue(this.usuario.telefone),
                this.formulario.controls.departamento.setValue(depart.nome),
                console.log( this.formulario.value)
                this.serviceDepartamento.getDepartamentos().subscribe(
                  (resposta) => this.lista = resposta
                  )           
                }
                );
              }           
              )
            })
          }  

          alterarUsuario(): void{
           console.log( this.formulario.value)
          }

        }
        