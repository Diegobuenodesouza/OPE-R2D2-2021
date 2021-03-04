package br.com.opefit.projeto.recursos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.servicos.DepartamentoServico;

@CrossOrigin(origins = "http://localhost:4200")
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
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Departamento> findById(@PathVariable Long id) {
		Departamento obj = departamentoServico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<Departamento> insert(@RequestBody Departamento obj) {
		obj = departamentoServico.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		departamentoServico.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value="/{id}")
	public ResponseEntity<Departamento> update(@PathVariable Long id, @RequestBody Departamento obj) {
		obj = departamentoServico.updateDepartamento(id, obj);
		return ResponseEntity.ok().body(obj);
	}


}
