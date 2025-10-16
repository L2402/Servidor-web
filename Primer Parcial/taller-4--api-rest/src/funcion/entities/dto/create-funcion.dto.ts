import { IsDate, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateFacturaDto {
    
    @IsString()
    id_función: string;

    @IsDate()
    fecha_hora: Date;

    @IsNumber()
    precio: number;

}