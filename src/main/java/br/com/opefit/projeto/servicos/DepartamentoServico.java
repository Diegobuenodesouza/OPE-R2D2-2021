package br.com.opefit.projeto.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.repositorios.DepartamentoRepositorio;

@Service
public class DepartamentoServico {

	@Autowired
	private DepartamentoRepositorio departamentoRepositorio;

	public List<Departamento> findAll() {
		return departamentoRepositorio.findAll();
	}

	public Departamento findById(Long id) {
		Optional<Departamento> obj = departamentoRepositorio.findById(id);
		return obj.get();
	}

	public Departamento insert(Departamento usuario) {
		return departamentoRepositorio.save(usuario);
	}

	public void delete(Long id) {
		Departamento obj = findById(id);
		departamentoRepositorio.delete(obj);
	}

	public Departamento updateDepartamento(Long id, Departamento departamento) {
		Departamento user = departamentoRepositorio.getOne(id);

		user.setNome(departamento.getNome());

		return departamentoRepositorio.save(user);
	}

}
