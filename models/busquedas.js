import axios from 'axios';


class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Bogota'];

    constructor(){
        // to_do: Lerr bd si existe
    }

    get paramsMapbox(){
        return {
            'access_token':'pk.eyJ1Ijoic2FtdWptIiwiYSI6ImNsOTZoM2FjazJucGczem53aTNieHVhZnkifQ.56ZbjLLu03n_gwM4YVldVg',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = ''){
        //Peticion http 

        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
            params: this.paramsMapbox                      
        });

        const resp = await instance.get();


        console.log(resp.data);


        return []; //Retornar los lugares que coincidan con el lugar que escribio la persona
    }

}


export { Busquedas };