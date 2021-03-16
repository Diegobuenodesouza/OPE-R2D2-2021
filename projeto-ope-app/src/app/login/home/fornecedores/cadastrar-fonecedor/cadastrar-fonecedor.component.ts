import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';


@Component({
  selector: 'app-cadastrar-fonecedor',
  templateUrl: './cadastrar-fonecedor.component.html',
  styleUrls: ['./cadastrar-fonecedor.component.css']
})
export class CadastrarFonecedorComponent implements OnInit {

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    ativo : new FormControl('', [Validators.required]),
    documento : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email])
  });

  

  constructor(
    private serviceFornecedor : FornecedorService,
    private router : Router,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
  }

  cadastrarFornecedor(): void{
    let fornecedor = new Fornecedor(
      this.formulario.value.ativo,
      this.formulario.value.nome,
      this.formulario.value.documento,
      this.formulario.value.tipo,
      this.formulario.value.telefone,
      this.formulario.value.email,

    )

    this.serviceFornecedor.postFornecedor(fornecedor).subscribe(
      () =>  {this.toastr.success('Fornecedor criado com sucesso!') ,this.router.navigate(['/home', 'fornecedores'])},     
      (error) => alert(error)
    );
   }

}
