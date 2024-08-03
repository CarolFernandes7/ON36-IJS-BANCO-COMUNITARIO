import { Module } from '@nestjs/common';
import { ClienteController } from './controllers/cliente.controller';
import { GerenteController } from './controllers/gerente.controller';
import { ClienteService } from './services/cliente.service';
import { GerenteService } from './services/gerente.service';

@Module({
  imports: [],
  controllers: [ClienteController, GerenteController],
  providers: [ClienteService, GerenteService],
})
export class AppModule {}