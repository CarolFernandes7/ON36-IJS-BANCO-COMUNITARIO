import { Injectable } from '@nestjs/common';
import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];

  findAll(): Cliente[] {
    return this.clientes;
  }

  create(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  delete(id: number) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  }
}