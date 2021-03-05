import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Colaborador } from '../_model/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class BuscaUsuarariosService {

  private URL_USUARIOS = 'http://localhost:8080/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.URL_USUARIOS)
  }

  postUsuario(colaborador : Colaborador): Observable<any>{
    return this.http.post(this.URL_USUARIOS, colaborador);
  }

}
