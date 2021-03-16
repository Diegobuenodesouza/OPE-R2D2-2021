import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/servicos/fornecedor.service';
import { Fornecedor } from 'src/app/_model/Fornecedor';


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  id = 0;


  listFornecedor : Fornecedor[] = []
  constructor(private serviceFornecedor : FornecedorService) { }

  ngOnInit(): void {
    this.serviceFornecedor.getFornecedores().subscribe(
      (resposta) =>  this.listFornecedor = resposta
    );    
  }

  retornoAtivo(s : Boolean):  String{
    if (s === true) {
      return "Ativo";
    }
    return "Desativado";
  }

  passaId(id: any): void{
    this.id = id;
  }

}
