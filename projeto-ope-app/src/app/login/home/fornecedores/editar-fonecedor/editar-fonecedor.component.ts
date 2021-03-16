import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';

@Component({
  selector: 'app-editar-fonecedor',
  templateUrl: './editar-fonecedor.component.html',
  styleUrls: ['./editar-fonecedor.component.css']
})
export class EditarFonecedorComponent implements OnInit {
  fornecedor = new Fornecedor(false,'','','','','');
  id : number = 0
  
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    ativo : new FormControl('', [Validators.required]),
    documento : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email])
  });


  constructor(
    private router : Router,
    private activeRoute: ActivatedRoute,
    private serviceFornecedor: FornecedorService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
   this.activeRoute.params.subscribe((parametro : Params) =>{   
    this.serviceFornecedor.getFornecedorById(parametro.id).subscribe(
      (resposta) => {this.fornecedor = resposta, this.id = parametro.id,
      this.formulario.controls.nome.setValue(this.fornecedor.nome),
      this.formulario.controls.ativo.setValue(this.fornecedor.ativo),
      this.formulario.controls.documento.setValue(this.fornecedor.documento),
      this.formulario.controls.tipo.setValue(this.fornecedor.tipo),
      this.formulario.controls.telefone.setValue(this.fornecedor.telefone),
      this.formulario.controls.email.setValue(this.fornecedor.email)
      
      }
    );
   })
  }

  editarFornecedor(): void{
    let fornecedoEditado = new Fornecedor(
      this.formulario.value.ativo,
      this.formulario.value.nome,
      this.formulario.value.documento,
      this.formulario.value.tipo,
      this.formulario.value.telefone,
      this.formulario.value.email,
    )
    console.log(fornecedoEditado)
    this.serviceFornecedor.putFornecedor(this.id, fornecedoEditado).subscribe(
      () => {this.toastr.info('Fornecedor editado com sucesso!'), this.router.navigate(['/home', 'fornecedores'])}
    );

   

  }

}
