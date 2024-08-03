import { Gerente } from './gerente';

export class GerenteFactory {
  static create(id: number, nome: string): Gerente {
    return new Gerente(id, nome, []);
  }
}
