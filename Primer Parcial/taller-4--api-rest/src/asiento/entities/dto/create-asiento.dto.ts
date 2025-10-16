import { IsDate, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateAsientoDto {
    @IsString()
    id_asiento: string;

    @IsNumber()
    numero: number;

    @IsString()
    estado: string;


}