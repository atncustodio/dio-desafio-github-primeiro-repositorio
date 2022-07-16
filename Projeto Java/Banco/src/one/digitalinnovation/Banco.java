package one.digitalinnovation;

import java.util.ArrayList;
import java.util.List;

public class Banco {
	
	private String nome;
	private List<Conta> contas;

	public Banco() {
		this.contas = new ArrayList<Conta>();
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(List<Conta> contas) {
		this.contas = contas;
	}
	
	public List<Cliente> getClientes() {
		List<Cliente> clientes = new ArrayList<Cliente>();
		List<Conta> contas = this.getContas();
		for (Conta conta : contas)
			if(!clientes.contains(conta.getCliente()))
				clientes.add(conta.getCliente());
		
		return clientes;
	}
	
	public String getClientePorConta(Conta conta) {
		Cliente cliente = new Cliente("");
		List<Conta> contas = this.getContas();
		for (Conta c : contas)
			if(c.equals(conta)) {
				cliente = c.getCliente();
				break;
			}
		return cliente.getNome();
	}
}
