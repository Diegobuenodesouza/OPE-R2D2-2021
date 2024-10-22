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

import br.com.opefit.projeto.entidades.Fornecedor;
import br.com.opefit.projeto.servicos.FornecedorServico;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorRecurso {	
	
	@Autowired
	private FornecedorServico fornecedorServico;
			
	
	@GetMapping
	public ResponseEntity<List<Fornecedor>> findAll(){						
		List<Fornecedor> list = fornecedorServico.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Fornecedor> findById(@PathVariable Long id) {
		Fornecedor obj = fornecedorServico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<Fornecedor> insert(@RequestBody Fornecedor obj) {
		obj = fornecedorServico.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		fornecedorServico.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value="/{id}")
	public ResponseEntity<Fornecedor> update(@PathVariable Long id, @RequestBody Fornecedor obj) {
		obj = fornecedorServico.updateFornecedor(id, obj);
		return ResponseEntity.ok().body(obj);
	}
}
