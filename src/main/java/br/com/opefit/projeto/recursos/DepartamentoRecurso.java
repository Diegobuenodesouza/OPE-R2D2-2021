package br.com.opefit.projeto.recursos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.servicos.DepartamentoServico;

@RestController
@RequestMapping(value = "/departamentos")
public class DepartamentoRecurso {	
	
	@Autowired
	private DepartamentoServico departamentoServico;
			
	@GetMapping
	public ResponseEntity<List<Departamento>> findAll(){						
		List<Departamento> list = departamentoServico.findAll();
		return ResponseEntity.ok().body(list);
	}


}
