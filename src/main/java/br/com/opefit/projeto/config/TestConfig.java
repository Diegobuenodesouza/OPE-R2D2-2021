package br.com.opefit.projeto.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.entidades.Usuario;
import br.com.opefit.projeto.repositorios.DepartamentoRepositorio;
import br.com.opefit.projeto.repositorios.UsuarioRepositorio;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
	
	@Autowired
	private DepartamentoRepositorio departamentoRepositorio;
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;

	@Override
	public void run(String... args) throws Exception {
		
		Departamento d1 = new Departamento(null, "Fiscal");
		Departamento d2 = new Departamento(null, "Financeiro");
		Departamento d3 = new Departamento(null, "Compras");
		
		departamentoRepositorio.saveAll(Arrays.asList(d1,d2,d3));
		
		Usuario u1 = new Usuario(null,true,"Diego","Assistente Fiscal", "878798778", d1);
		Usuario u2 = new Usuario(null,true,"Camila","Assistente Financeiro", "54574878", d2);
		Usuario u3 = new Usuario(null,true,"Meg","Assistente Financeiro", "12312321", d2);
		Usuario u4 = new Usuario(null,true,"Thos","Assistente Compras", "456456456", d3);
		
		usuarioRepositorio.saveAll(Arrays.asList(u1,u2,u3,u4));
		
		
	}	
	
	
	

}
