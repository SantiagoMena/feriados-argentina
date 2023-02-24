import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Feriado, FeriadoRelations} from '../models';

export class FeriadoRepository extends DefaultCrudRepository<
  Feriado,
  typeof Feriado.prototype.id,
  FeriadoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Feriado, dataSource);
  }
}
