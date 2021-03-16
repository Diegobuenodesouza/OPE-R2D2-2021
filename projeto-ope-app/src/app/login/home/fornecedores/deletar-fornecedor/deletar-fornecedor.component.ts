import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';

@Component({
  selector: 'app-deletar-fornecedor',
  templateUrl: './deletar-fornecedor.component.html',
  styleUrls: ['./deletar-fornecedor.component.css']
})
export class DeletarFornecedorComponent implements OnChanges {

  fornecedor = new Fornecedor(false,'','','','','')
  @Input() id = 0
  @Output() atualizarLista = new EventEmitter()

  constructor(private serviceFornecedor :  FornecedorService,
    private toastr : ToastrService,
    ) { }

  ngOnChanges(): void {
    this.serviceFornecedor.getFornecedorById(this.id).subscribe(
      (resposta) => this.fornecedor = resposta
    );
  }


  excluirFornecedor(){
    this.serviceFornecedor.deleteFornecedor(this.id).subscribe(
      () => {this.toastr.warning('Fornecedor deletado com sucesso!') ,this.atualizarLista.emit()}
    );
  }
}
