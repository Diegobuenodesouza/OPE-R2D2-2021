package br.com.opefit.projeto.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.repositorios.DepartamentoRepositorio;

@Service
public class DepartamentoServico {
	
	@Autowired
	private DepartamentoRepositorio departamentoRepositorio;
	
	public List<Departamento> findAll(){
		return departamentoRepositorio.findAll();
	}

}
