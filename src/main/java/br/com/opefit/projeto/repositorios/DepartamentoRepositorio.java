package br.com.opefit.projeto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.opefit.projeto.entidades.Departamento;

public interface DepartamentoRepositorio extends JpaRepository<Departamento, Long> {

}
