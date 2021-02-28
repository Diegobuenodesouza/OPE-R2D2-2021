package br.com.opefit.projeto.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.opefit.projeto.entidades.Departamento;
import br.com.opefit.projeto.repositorios.DepartamentoRepositorio;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
	
	@Autowired
	private DepartamentoRepositorio departamentoRepositorio;

	@Override
	public void run(String... args) throws Exception {
		
		Departamento d1 = new Departamento(null, "Fiscal");
		Departamento d2 = new Departamento(null, "Financeiro");
		
		departamentoRepositorio.saveAll(Arrays.asList(d1,d2));
		
	}	
	
	
	

}
