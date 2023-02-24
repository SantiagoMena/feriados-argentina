import axios from "axios";

export class Nolaborables
{
    private url: string = `http://nolaborables.com.ar/api/v2/feriados/`;

    async getByAno(ano: number)
    {
        let feriados = [];
        try {
            const response = await axios.get(`${this.url}${ano}`);
            
            feriados = response.status === 200 ? response.data : [];
        } catch (error) {
            console.error({error});
        }
        return feriados;
    }
}