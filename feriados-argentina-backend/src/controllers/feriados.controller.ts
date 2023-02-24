import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Feriado} from '../models';
import {FeriadoRepository} from '../repositories';

export class FeriadosController {
  constructor(
    @repository(FeriadoRepository)
    public feriadoRepository : FeriadoRepository,
  ) {}

  // @post('/feriados')
  // @response(200, {
  //   description: 'Feriado model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(Feriado)}},
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Feriado, {
  //           title: 'NewFeriado',
  //           exclude: ['id'],
  //         }),
  //       },
  //     },
  //   })
  //   feriado: Omit<Feriado, 'id'>,
  // ): Promise<Feriado> {
  //   return this.feriadoRepository.create(feriado);
  // }

  // @get('/feriados/count')
  // @response(200, {
  //   description: 'Feriado model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(Feriado) where?: Where<Feriado>,
  // ): Promise<Count> {
  //   return this.feriadoRepository.count(where);
  // }

  // @get('/feriados')
  // @response(200, {
  //   description: 'Array of Feriado model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(Feriado, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Feriado) filter?: Filter<Feriado>,
  // ): Promise<Feriado[]> {
  //   return this.feriadoRepository.find(filter);
  // }

  // @patch('/feriados')
  // @response(200, {
  //   description: 'Feriado PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Feriado, {partial: true}),
  //       },
  //     },
  //   })
  //   feriado: Feriado,
  //   @param.where(Feriado) where?: Where<Feriado>,
  // ): Promise<Count> {
  //   return this.feriadoRepository.updateAll(feriado, where);
  // }

  @get('/feriados/{ano}')
  @response(200, {
    description: 'Feriado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Feriado, {includeRelations: true}),
      },
    },
  })
  async findByAno(
    @param.path.string('ano') ano: number,
    @param.filter(Feriado, {exclude: 'where'}) filter?: FilterExcludingWhere<Feriado>
  ): Promise<Feriado[]> {
    return this.feriadoRepository.find({
      where: {
        ano
      }
    });
  }

  // @patch('/feriados/{id}')
  // @response(204, {
  //   description: 'Feriado PATCH success',
  // })
  // async updateById(
  //   @param.path.string('id') id: string,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Feriado, {partial: true}),
  //       },
  //     },
  //   })
  //   feriado: Feriado,
  // ): Promise<void> {
  //   await this.feriadoRepository.updateById(id, feriado);
  // }

  // @put('/feriados/{id}')
  // @response(204, {
  //   description: 'Feriado PUT success',
  // })
  // async replaceById(
  //   @param.path.string('id') id: string,
  //   @requestBody() feriado: Feriado,
  // ): Promise<void> {
  //   await this.feriadoRepository.replaceById(id, feriado);
  // }

  // @del('/feriados/{id}')
  // @response(204, {
  //   description: 'Feriado DELETE success',
  // })
  // async deleteById(@param.path.string('id') id: string): Promise<void> {
  //   await this.feriadoRepository.deleteById(id);
  // }
}
