import { Conta } from './conta';

export class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public contas: Conta[] = []
    ) {}
    adicionarConta(conta:Conta) {
        this.contas.push(conta);
    }
    removeConta(numeroConta: string)
{
    this.contas = this.contas.filter(conta => conta.numero !== numeroConta);
}
}