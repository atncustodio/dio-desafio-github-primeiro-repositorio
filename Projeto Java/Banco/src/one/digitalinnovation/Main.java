package one.digitalinnovation;

import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {

		Banco banco = new Banco();
		banco.setNome("Banco teste");
	
		Cliente c1 = new Cliente("Cliente 1");
		Conta contaCorrente = new ContaCorrente(c1);
		Conta contaPoupanca = new ContaPoupanca(c1);
		
		contaCorrente.depositar(100);
		contaCorrente.sacar(20);
		contaCorrente.transferir(50, contaPoupanca);
		
		Cliente c2 = new Cliente("Cliente 2");
		Conta contaCorrente2 = new ContaCorrente(c2);
		
		contaCorrente2.depositar(100);
		
		contaCorrente.imprimirExtrato();
		contaPoupanca.imprimirExtrato();
		
		List<Conta> contas = new ArrayList<Conta>();
		contas.add(contaCorrente);
		contas.add(contaPoupanca);
		contas.add(contaCorrente2);
		
		banco.setContas(contas);
		
		List<Cliente> clientes = banco.getClientes();
		if(!clientes.isEmpty()) {
			for(Cliente cliente : clientes)
				System.out.println(cliente.getNome());
		}
		else {
			System.out.println("Banco não possui clientes.");
		}
		
		System.out.println(banco.getClientePorConta(contaCorrente));
		
				
	}

}
