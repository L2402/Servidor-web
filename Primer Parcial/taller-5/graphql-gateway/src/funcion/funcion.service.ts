import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { FuncionType } from '../types/funcion.type';

@Injectable()
export class FuncionService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<FuncionType[]> {
    const response = await firstValueFrom(
      this.httpService.get('/funcion')
    );
    return response.data;
  }

  async findOne(id: string): Promise<FuncionType> {
    const response = await firstValueFrom(
      this.httpService.get(`/funcion/${id}`)
    );
    return response.data;
  }

  async findByPelicula(peliculaId: string): Promise<FuncionType[]> {
    const funciones = await this.findAll();
    return funciones.filter(f => f.pelicula?.id_pelicula === peliculaId);
  }

  async findBySala(salaId: string): Promise<FuncionType[]> {
    const funciones = await this.findAll();
    return funciones.filter(f => f.sala?.id_sala === salaId);
  }
}
