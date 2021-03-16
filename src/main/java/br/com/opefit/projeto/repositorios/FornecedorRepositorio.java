package br.com.opefit.projeto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.opefit.projeto.entidades.Fornecedor;

public interface FornecedorRepositorio extends JpaRepository<Fornecedor, Long> {
}
