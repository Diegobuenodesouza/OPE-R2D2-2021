package br.com.opefit.projeto.servicos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.opefit.projeto.entidades.Usuario;
import br.com.opefit.projeto.repositorios.UsuarioRepositorio;

@Service
public class UsuarioService {
	
	@Autowired 
	private UsuarioRepositorio usuarioRepositorio;
	
	public List<Usuario> findAll(){
		return usuarioRepositorio.findAll();
	}
	
	public Usuario findById(Long id) {
		Optional<Usuario> obj =  usuarioRepositorio.findById(id);
		return obj.get();		
	}
	
	public Usuario insert(Usuario usuario) {
		return usuarioRepositorio.save(usuario);
	}
	
	public void delete(Long id) {
		Usuario obj = findById(id);
		usuarioRepositorio.delete(obj);
	}
	
	public Usuario updateUsuario(Long id, Usuario usuario) {
		Usuario user = usuarioRepositorio.getOne(id);
		
		user.setNome(usuario.getNome());
		user.setAtivo(usuario.getAtivo());
		user.setTelefone(usuario.getTelefone());
		user.setDepartamento(usuario.getDepartamento());
		user.setCargo(usuario.getCargo());
		
		return usuarioRepositorio.save(user);		
	}
	
	
	
}
