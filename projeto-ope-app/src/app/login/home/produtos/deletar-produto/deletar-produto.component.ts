import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProdutoService } from 'src/app/servicos/produto.service';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent {

  @Input() id = 0
  produto = new Produto('','','','','','','')
  @Output() atualizarListaProduto = new EventEmitter()

  constructor(
    private serviceProdutos : ProdutoService
  ) { }

  ngOnChanges(){
    this.serviceProdutos.getProdutoById(this.id).subscribe(
      (resposta) => {this.produto = resposta}
    );
  }

  excluirProduto(): void{
    this.serviceProdutos.deleteProduto(this.id).subscribe(
      () => this.atualizarListaProduto.emit()
    );
    
  }

}
