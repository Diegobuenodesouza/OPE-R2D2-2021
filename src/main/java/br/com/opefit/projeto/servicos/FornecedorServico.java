package br.com.opefit.projeto.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Fornecedor;
import br.com.opefit.projeto.repositorios.FornecedorRepositorio;

@Service
public class FornecedorServico {

	@Autowired
	private FornecedorRepositorio fornecedorRpositorio;

	public List<Fornecedor> findAll() {
		return fornecedorRpositorio.findAll();
	}

	public Fornecedor findById(Long id) {
		Optional<Fornecedor> obj = fornecedorRpositorio.findById(id);
		return obj.get();
	}

	public Fornecedor insert(Fornecedor fornecedor) {
		return fornecedorRpositorio.save(fornecedor);
	}

	public void delete(Long id) {
		Fornecedor obj = findById(id);
		fornecedorRpositorio.delete(obj);
	}

	public Fornecedor updateFornecedor(Long id, Fornecedor fornecedor) {
		Fornecedor user = fornecedorRpositorio.getOne(id);

		user.setAtivo(fornecedor.getAtivo());
		user.setDocumento(fornecedor.getDocumento());
		user.setNome(fornecedor.getNome());
		user.setTelefone(fornecedor.getTelefone());
		user.setTipo(fornecedor.getTipo());
		user.setEmail(fornecedor.getEmail());	

		return fornecedorRpositorio.save(user);
	}	
	
	

}
