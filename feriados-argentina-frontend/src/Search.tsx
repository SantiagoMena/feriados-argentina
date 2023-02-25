import React from "react";
import { Feriados } from "./apis/Feriados";

export class Search extends React.Component<any, any>{
    /**
     *
     */
    constructor(props: any) {
        super(props);

        const feriados = new Feriados;

        this.state = {
            ano: "",
            feriados: [],
        };
    }
    

    render() {
        const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const feriados = new Feriados;
            this.setState({
                ano: e.target.value,
                feriados: e.target.value.trim().length === 4 ? await feriados.getFeriados(parseInt(e.target.value.trim())) : [],
            });
        }

        const feriados: any = [];

        for (let i = 0; i < this.state.feriados.length; i++) {
            const feriado = this.state.feriados[i];
            feriados.push(<p>Feriado {feriado.dia}/{feriado.mes}/{feriado.ano} por {feriado.motivo} de tipo {feriado.tipo}</p>);
        }

        return (
        <div>
            <h1>Buscar un feriados por año!</h1>
            <input onChange={onChange} type="text" value={this.state.ano} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            {feriados}
        </div>
        );
    }
  }