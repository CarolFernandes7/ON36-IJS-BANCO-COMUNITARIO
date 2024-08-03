import { Controller, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { GerenteService } from '../services/gerente.service';
import { Cliente } from '../models/cliente';
import { Conta } from '../models/conta';

@Controller('gerentes')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post(':gerenteId/clientes')
  adicionarCliente(@Param('gerenteId') gerenteId: number, @Body() cliente: Cliente) {
    this.gerenteService.adicionarCliente(gerenteId, cliente);
  }

  @Delete(':gerenteId/clientes/:clienteId')
  removerCliente(@Param('gerenteId') gerenteId: number, @Param('clienteId') clienteId: number) {
    this.gerenteService.removerCliente(gerenteId, clienteId);
  }

  @Post(':gerenteId/clientes/:clienteId/contas')
  abrirConta(@Param('gerenteId') gerenteId: number, @Param('clienteId') clienteId: number, @Body() conta: Conta) {
    this.gerenteService.abrirConta(gerenteId, clienteId, conta);
  }

  @Delete(':gerenteId/clientes/:clienteId/contas/:numeroConta')
  fecharConta(@Param('gerenteId') gerenteId: number, @Param('clienteId') clienteId: number, @Param('numeroConta') numeroConta: string) {
    this.gerenteService.fecharConta(gerenteId, clienteId, numeroConta);
  }

  @Patch(':gerenteId/clientes/:clienteId/contas/:numeroConta')
  modificarTipoConta(@Param('gerenteId') gerenteId: number, @Param('clienteId') clienteId: number, @Param('numeroConta') numeroConta: string, @Body('tipo') novoTipo: string) {
    this.gerenteService.modificarTipoConta(gerenteId, clienteId, numeroConta, novoTipo);
  }
}