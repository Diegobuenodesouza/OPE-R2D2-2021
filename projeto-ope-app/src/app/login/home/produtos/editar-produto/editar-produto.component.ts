import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  listaCores = ['Vermelho', 'Branco', 'Preto', 'Verde', 'Amarelho', 'Cinza']
  listaTamanho = ['P', 'M' , 'G' , 'GG']
  listaCategoria = ['Animes', 'Games' , 'Nostalgia', 'Serie/TV', 'Cinema', 'Herois']

  produto = new Produto('','','','','','','')

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
    private activeroute: ActivatedRoute,
    private serviceProduto: ProdutoService
  ) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe((parametro: Params)  => {
      this.serviceProduto.getProdutoById(parametro.id).subscribe(
        (resposta) => {this.produto = resposta,
        this.formulario.controls.nome.setValue(this.produto.nome),
        this.formulario.controls.descricao.setValue(this.produto.descricao),
        this.formulario.controls.categoria.setValue(this.produto.categoria),
        this.formulario.controls.cor.setValue(this.produto.cor),
        this.formulario.controls.marca.setValue(this.produto.marca),
        this.formulario.controls.imagem.setValue(this.produto.imagem),
        this.formulario.controls.tamanho.setValue(this.produto.tamanho)
        },
        
      );
    })
  }

}
