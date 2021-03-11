import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/servicos/produto.service';
import { Produto } from 'src/app/_model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  idProduto = 1
  listProdutos : Produto[] =[]
  busca : string =''
  
  constructor(
    private produtoService : ProdutoService
    ) { }
    
    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(
        (resposta) => this.listProdutos = resposta,
        (error) => alert('Erro ao iniciar a pagina!' + error)
        );
      }      

      passaId(id: any): void{
        this.idProduto = id;
      }
      
      filtrar($event? : any){  
        this.busca = $event.target.value
        
        if (this.busca.length ===0) {
          this.produtoService.getProdutos().subscribe(
            (resposta) => this.listProdutos = resposta,
            (error) => alert('Erro ao iniciar a pagina!' + error)
            );
          } else {
            this.produtoService.getProdutos().subscribe(
              (resposta: any) => {
                let listafiltrata : Produto[] = []
                for (let produto of resposta){
                  if (produto.descricao.toLowerCase().includes(this.busca.toLowerCase()) || produto.cor.toLowerCase().includes(this.busca.toLowerCase())){
                    listafiltrata.push(produto)
                  }
                }
                this.listProdutos = listafiltrata
              }              
              );            
            }
          }
          
          
        }
        
        