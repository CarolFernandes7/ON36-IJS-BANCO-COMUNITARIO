import { Injectable } from '@nestjs/common';
import { Gerente } from '../models/gerente';
import { Cliente } from '../models/cliente';
import { Conta } from '../models/conta';

@Injectable()
export class GerenteService {
  private readonly gerentes: Gerente[] = [];

  adicionarCliente(gerenteId: number, cliente: Cliente) {
    const gerente = this.gerentes.find(g => g.id === gerenteId);
    if (gerente) {
      gerente.adicionarCliente(cliente);
    }
  }

  removerCliente(gerenteId: number, clienteId: number) {
    const gerente = this.gerentes.find(g => g.id === gerenteId);
    if (gerente) {
      gerente.removerCliente(clienteId);
    }
  }

  abrirConta(gerenteId: number, clienteId: number, conta: Conta) {
    const gerente = this.gerentes.find(g => g.id === gerenteId);
    if (gerente) {
      gerente.abrirConta(clienteId, conta);
    }
  }

  fecharConta(gerenteId: number, clienteId: number, numeroConta: string) {
    const gerente = this.gerentes.find(g => g.id === gerenteId);
    if (gerente) {
      gerente.fecharConta(clienteId, numeroConta);
    }
  }

  modificarTipoConta(gerenteId: number, clienteId: number, numeroConta: string, novoTipo: string) {
    const gerente = this.gerentes.find(g => g.id === gerenteId);
    if (gerente) {
      gerente.modificarTipoConta(clienteId, numeroConta, novoTipo);
    }
  }
}