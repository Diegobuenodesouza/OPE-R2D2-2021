import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  listaCores = ['Vermelho', 'Branco', 'Preto', 'Verde', 'Amarelo', 'Cinza']
  listaTamanho = ['P', 'M' , 'G' , 'GG', 'XG']
  listaCategoria = ['Animes', 'Games' , 'Nostalgia', 'Serie/TV', 'Cinema', 'Herois']

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao : new FormControl('', [Validators.required]),
    categoria : new FormControl('', [Validators.required]),
    cor : new FormControl('', [Validators.required]),
    tamanho : new FormControl('', [Validators.required]),
    marca : new FormControl('', [Validators.required]),
    imagem : new FormControl(''),
  })

  constructor(
    private router : Router,
    private serviceProduto : ProdutoService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.listaCores.sort();
    this.listaCategoria.sort();
  }

  cadastrar():void{
    let produto = new Produto(
      this.formulario.value.nome,
      this.formulario.value.cor,
      this.formulario.value.tamanho,
      this.formulario.value.marca,
      this.formulario.value.categoria,
      this.formulario.value.descricao,
      this.formulario.value.imagem
    )
    this.serviceProduto.postProduto(produto).subscribe(
      () => { this.toastr.success('Produto cadastrado com sucesso!'),this.router.navigate(['/home', 'produtos'])}
    );
  }
  
}
