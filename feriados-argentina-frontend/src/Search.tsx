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
            feriados.push(
                <div className="w-1/4 block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                    <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {feriado.dia}/{feriado.mes}/{feriado.ano}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Feriado por {feriado.motivo} de tipo {feriado.tipo}
                    </p>
                </div>
            );
        }

        return (
        <div>
            <h1 className="text-xl font-mono">Buscar un feriados por año!</h1>
            <input className="rounded text-black-500" onChange={onChange} type="number" value={this.state.ano}/>
            
            <div className="flex mb-4">
                {feriados}
            </div>
        </div>
        );
    }
  }