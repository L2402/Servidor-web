import { PartialType } from '@nestjs/swagger';
import { CreateAsientoDto } from '../dto/create-asiento.dto'

export class UpdateFacturaDto extends PartialType(CreateAsientoDto) {}