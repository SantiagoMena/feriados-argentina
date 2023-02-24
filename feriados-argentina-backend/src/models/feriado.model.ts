import {Entity, model, property} from '@loopback/repository';

@model()
export class Feriado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  motivo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  info: string;

  @property({
    type: 'number',
    required: true,
  })
  dia: number;

  @property({
    type: 'number',
    required: true,
  })
  mes: number;

  @property({
    type: 'number',
    required: true,
  })
  ano: number;

  @property({
    type: 'string',
    required: true,
  })
  feriadoId: string;


  constructor(data?: Partial<Feriado>) {
    super(data);
  }
}

export interface FeriadoRelations {
  // describe navigational properties here
}

export type FeriadoWithRelations = Feriado & FeriadoRelations;
