import { Module, forwardRef } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ReservaAsientoService } from './reserva-asiento.service';
import { ReservaAsientoResolver } from './reserva-asiento.resolver';
import { ReservaModule } from '../reserva/reserva.module';
import { AsientoModule } from '../asiento/asiento.module';

@Module({
  imports: [HttpModule, forwardRef(() => ReservaModule), forwardRef(() => AsientoModule)],
  providers: [ReservaAsientoResolver, ReservaAsientoService],
  exports: [ReservaAsientoService],
})
export class ReservaAsientoModule {}
