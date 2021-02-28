package br.com.opefit.projeto.recursos;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.opefit.projeto.entidades.Departamento;

@RestController
@RequestMapping(value = "/departamentos")
public class DepartamentoRecurso {
	
	@GetMapping
	public ResponseEntity<List<Departamento>> findAll(){
		
		
		Departamento dp1 = new Departamento(1L,"Financeiro");
		Departamento dp2 = new Departamento(2L,"Fiscal");
		
		List<Departamento> list = Arrays.asList(dp1,dp2);
		
		return ResponseEntity.ok().body(list);
	}


}
