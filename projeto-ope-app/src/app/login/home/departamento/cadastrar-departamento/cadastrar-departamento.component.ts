import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-cadastrar-departamento',
  templateUrl: './cadastrar-departamento.component.html',
  styleUrls: ['./cadastrar-departamento.component.css']
})
export class CadastrarDepartamentoComponent implements OnInit {

  formulario = new FormGroup({
    nomeDepartamento: new FormControl('', [Validators.required , Validators.minLength(3)])
  })

  constructor(
    private bdepar : BuscaDepartamentosService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  cadastrarDepart(){
    let dep = new Departamentos(this.formulario.value.nomeDepartamento);
    console.log(dep)
    this.bdepar.postDepartamento(dep).subscribe(
      () => this.router.navigate(['home', 'departamentos']),
      () => console.log("Deu erro")
    );
  }

}
