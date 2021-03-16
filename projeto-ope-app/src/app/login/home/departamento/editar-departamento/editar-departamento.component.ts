import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {


  departamento = new Departamentos('');
  departamentoId = 0
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(
    private route: ActivatedRoute,
    private service: BuscaDepartamentosService,
    private router: Router,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametro: Params) => {
      this.service.getDepartamentoById(parametro.id).subscribe(
         (resposta) =>  { this.departamentoId = parametro.id, this.departamento = resposta , this.formulario.controls.nome.setValue(this.departamento.nome) } 
      )
    })
  }

  alterarDepartamento()  {
    let dep = new Departamentos(this.formulario.value.nome)
    this.service.putDepartamento(this.departamentoId , dep).subscribe(
      () => { this.toastr.info('Departamento editado com sucesso!')
         this.router.navigate(['/home' , 'departamentos'])}
    );
  }

}
