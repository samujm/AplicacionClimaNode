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

    get paramsWeather(){
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
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

    async climaLugar(lat, lon){
        try {
            //instancia de axios.create()
            const instance2 = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
                params: this.paramsWeather
            })

            //respuesta, extraer la información de la data

            const resp2 = await instance2.get();

            return resp2.data.main.map( () =>({
                // desc: clima.weather[0].description,
                min:  temp_min,
                max: temp_max,
                normal: temp
            }));

        } catch (error) {
            console.log(error);
        }
    }

}


export { Busquedas };