import { Cliente } from './cliente';

export class ClienteFactory {
  static create(id: number, nome: string): Cliente {
    return new Cliente(id, nome, []);
  }
}