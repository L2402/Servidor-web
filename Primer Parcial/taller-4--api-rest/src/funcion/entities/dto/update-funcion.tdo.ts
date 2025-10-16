import { PartialType } from '@nestjs/swagger';
import { CreateFacturaDto } from '../dto/create-funcion.dto'

export class UpdateFacturaDto extends PartialType(CreateFacturaDto) {}
