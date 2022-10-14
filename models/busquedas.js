import axios from 'axios';


class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Bogota'];

    constructor(){
        // to_do: Lerr bd si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
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
        // console.log(resp.data.features);
        return resp.data.features.map( lugar =>({
            id: lugar.id,
            nombre: lugar.place_name_es,
            lng: lugar.center[0],
            lat: lugar.center[1]
        }));
    }

}


export { Busquedas };