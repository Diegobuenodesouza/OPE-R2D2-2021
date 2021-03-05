import { DepartamentoComponent } from "../login/home/departamento/departamento.component";
import { Departamentos } from "./Departamentos";

export class Colaborador{
	public id  = null;

   constructor(    
	public ativo : boolean,
	public nome : String,
	public cargo : String,
	public telefone : String,
	public departamento : Departamentos
   ){}
}