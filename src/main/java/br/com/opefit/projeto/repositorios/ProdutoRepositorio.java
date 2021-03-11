package br.com.opefit.projeto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.opefit.projeto.entidades.Produto;

public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {

}
