export class Conta {
    constructor(
      public numero: string,
      public tipo: string,
      public saldo: number,
      public clienteId: number
    ) {}
  
    modificarTipo(tipo: string) {
      this.tipo = tipo;
    }
  }