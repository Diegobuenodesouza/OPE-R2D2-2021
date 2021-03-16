import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../_model/Fornecedor';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private URL_FORNECEDOR  = 'http://localhost:8080/fornecedores'

  constructor(private http: HttpClient) { }

  getFornecedores(): Observable<any>{
    return this.http.get(this.URL_FORNECEDOR)
  }

  postFornecedor(fornecedor : Fornecedor): Observable<any>{
    return this.http.post(this.URL_FORNECEDOR, fornecedor);
  }

  getFornecedorById(id: number): Observable<any>{
    return this.http.get(`${this.URL_FORNECEDOR}/${id}`)
  }

  deleteFornecedor(id: number): Observable<any>{
    return this.http.delete<Fornecedor>(`${this.URL_FORNECEDOR}/${id}`)
  }

  
  putFornecedor(id: number, fornecedor: Fornecedor) : Observable<any>{
    return this.http.put(`${this.URL_FORNECEDOR}/${id}`, fornecedor)
  }
}
