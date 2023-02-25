import axios from "axios";

export class Feriados
{
    private url: string = 'http://localhost:8001/feriados/';

    async getFeriados(ano: number)
    {
        let feriados = [];
        try {
            const feriadosResponse = await axios.get(`${this.url}${ano}`);

            feriados = feriadosResponse.status === 200 ? feriadosResponse.data : [];
        } catch (error) {
            console.error({error});
        }

        return feriados;
    }
}