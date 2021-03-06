import { Component, EventEmitter, Input, OnChanges,  Output,  SimpleChanges } from '@angular/core';

import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnChanges {

  @Input() id = 0
  @Output() atualizarLista = new EventEmitter()

  usuario: Colaborador = new Colaborador(false,'','','', new Departamentos(''));

  constructor(private service : BuscaUsuarariosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getUsuarioById(this.id).subscribe(
      (retornoUsuario) => this.usuario = retornoUsuario
    );
  }

  excluirUsuario(){
    this.service.deleteUsuario(this.id).subscribe(
      () => { console.log("chegamos aqui"), this.atualizarLista.emit()}
    );
  }



}
