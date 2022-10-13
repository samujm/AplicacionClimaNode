import axios from 'axios';


class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Bogota'];

    constructor(){
        // to_do: Lerr bd si existe
    }

    async ciudad(lugar = ''){
        //Peticion http 
        // console.log('ciudad',lugar);

        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data.per_page);


        return []; //Retornar los lugares que coincidan con el lugar que escribio la persona
    }

}


export { Busquedas };