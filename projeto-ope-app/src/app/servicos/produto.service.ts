import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../_model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  private URL_PRODUTOS = 'http://localhost:8080/produtos'

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any>{
    return this.http.get(this.URL_PRODUTOS)
  }

  postProduto(produto : Produto): Observable<any>{
    return this.http.post(this.URL_PRODUTOS, produto);
  }

  getProdutoById(id: number): Observable<any>{
    return this.http.get(`${this.URL_PRODUTOS}/${id}`)
  }

  deleteProduto(id: number): Observable<any>{
    return this.http.delete<Produto>(`${this.URL_PRODUTOS}/${id}`)
  }

  putFornecedor(id: number, produto : Produto) : Observable<any>{
    return this.http.put(`${this.URL_PRODUTOS}/${id}`, produto)
  }

}
