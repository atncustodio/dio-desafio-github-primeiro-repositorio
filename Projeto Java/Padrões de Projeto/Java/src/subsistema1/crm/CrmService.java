package subsistema1.crm;

public class CrmService {

	private CrmService() {
		super();
	}
	
	public static void gravarCliente(String nome, String cidade, String estado, String cep) {
		System.out.println("Cliente salvo no sistema de CRM:");
		System.out.println(nome);
		System.out.println(cidade);
		System.out.println(estado);
		System.out.println(cep);
	}
}
