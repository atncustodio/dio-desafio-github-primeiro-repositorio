package one.digitalinnovation.facade;

import subsistema1.crm.CrmService;
import subsistema2.cep.CepApi;

public class Facade {

	public void migrarCliente(String nome, String cep) {
		String cidade = CepApi.getInstancia().getCidade(cep);
		String estado = CepApi.getInstancia().getEstado(cep);
		
		CrmService.gravarCliente(nome, cidade, estado, cep);
	}
}
