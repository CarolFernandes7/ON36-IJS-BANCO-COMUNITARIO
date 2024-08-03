import { Cliente } from './cliente';
import { Conta } from './conta';

export class Gerente {
  constructor(
    public id: number,
    public nome: string,
    public clientes: Cliente[] = []
  ) {}

  adicionarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  removerCliente(clienteId: number) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== clienteId);
  }

  abrirConta(clienteId: number, conta: Conta) {
    const cliente = this.clientes.find(cliente => cliente.id === clienteId);
    if (cliente) {
      cliente.adicionarConta(conta);
    }
  }

  fecharConta(clienteId: number, numeroConta: string) {
    const cliente = this.clientes.find(cliente => cliente.id === clienteId);
    if (cliente) {
      cliente.removerConta(numeroConta);
    }
  }

  modificarTipoConta(clienteId: number, numeroConta: string, novoTipo: string) {
    const cliente = this.clientes.find(cliente => cliente.id === clienteId);
    if (cliente) {
      const conta = cliente.contas.find(conta => conta.numero === numeroConta);
      if (conta) {
        conta.modificarTipo(novoTipo);
      }
    }
  }
}