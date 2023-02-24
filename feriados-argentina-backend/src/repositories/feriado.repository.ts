import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Feriado, FeriadoRelations} from '../models';
import { Nolaborables } from '../apis/Nolaborables';

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

  async findByAno(ano: number): Promise<Array<Feriado>>
  {
    const feriadosDb = await this.find({ where: { ano } });

    return feriadosDb.length > 0 ? feriadosDb : this.findAndSaveByAno(ano);
  }

  async findAndSaveByAno(ano:number) {
    const ApiFeriados = new Nolaborables;

    const feriados = await ApiFeriados.getByAno(ano);

    for (let i = 0; i < feriados.length; i++) {
      const feriado = feriados[i];
      
      const feriadoModel = new Feriado;
      feriadoModel.ano = ano;
      feriadoModel.dia = feriado.dia;
      feriadoModel.mes = feriado.mes;
      feriadoModel.feriadoId = feriado.id;
      feriadoModel.tipo = feriado.tipo;
      feriadoModel.info = feriado.info;
      feriadoModel.motivo = feriado.motivo;
      
      await this.create(feriadoModel);
    }

    return await this.find({ where: { ano } });
  }
}
