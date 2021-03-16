import { Component,  EventEmitter,  Input,  OnChanges,  OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { BuscaDepartamentosService } from 'src/app/servicos/busca-departamentos.service';
import { BuscaUsuarariosService } from 'src/app/servicos/busca-usuararios.service';
import { Colaborador } from 'src/app/_model/Colaborador';
import { Departamentos } from 'src/app/_model/Departamentos';

@Component({
  selector: 'app-deletar-departamento',
  templateUrl: './deletar-departamento.component.html',
  styleUrls: ['./deletar-departamento.component.css']
})
export class DeletarDepartamentoComponent implements OnChanges {
  
  @Input() departamentoId = 0;
  @Output() atualizarLista = new EventEmitter();
  departamento = new Departamentos('')
  listaUsuario: Colaborador[] = []
  sum = 0;
    
  constructor(
    
    private service: BuscaDepartamentosService,
    private serviceUsuario: BuscaUsuarariosService,
    private toastr : ToastrService
    
    
    ) { }

    ngOnInit(): void {
     this.serviceUsuario.getUsuarios().subscribe( 
       (resposta) => {this.listaUsuario = resposta, this.ngOnChanges()} 
     );
      
    }
    
    ngOnChanges(): void {
      this.service.getDepartamentoById(this.departamentoId).subscribe(
        (resposta) => { this.departamento = resposta, this.contarColaborador()}
      );
    }
    
    contarColaborador() {      
      this.sum = 0;  
      this.listaUsuario.forEach((colaborador: Colaborador) => {
        if (colaborador.departamento.id == this.departamento.id) {
          this.sum += 1;
        }
      })         
    }    
    
    deletarDepartamento() {      
      this.service.deleteDepartamento(this.departamentoId).subscribe(
        () => { this.toastr.warning("Departamento deletado com sucesso!")
          ,this.atualizarLista.emit()}
      );
      }
    }  