import { DepartamentoComponent } from "../login/home/departamento/departamento.component";
import { Departamentos } from "./Departamentos";

export class Colaborador{
   
   constructor(
    public id : number,
	public ativo : boolean,
	public nome : String,
	public cargo : String,
	public telefone : String,
	public departamento : Departamentos
   ){}
}