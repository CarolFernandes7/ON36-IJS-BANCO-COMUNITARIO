import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll(): Cliente[] {
    return this.clienteService.findAll();
  }

  @Post()
  create(@Body() cliente: Cliente) {
    this.clienteService.create(cliente);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.clienteService.delete(id);
  }
}