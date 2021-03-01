package br.com.opefit.projeto.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.opefit.projeto.entidades.Usuario;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {

}
