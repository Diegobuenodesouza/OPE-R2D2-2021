import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  departamento = new Departamentos('');
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required])
  })

  constructor(
    private route: ActivatedRoute,
    private service: BuscaDepartamentosService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametro: Params) => {
      this.service.getDepartamentoById(parametro.id).subscribe(
         (resposta) =>  { this.departamento = resposta , this.formulario.controls.nome.setValue(this.departamento.nome) } 
      )
    })
  }

}
