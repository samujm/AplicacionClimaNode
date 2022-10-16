import * as dotenv from 'dotenv';
dotenv.config();

import {
    leerInput, pausa, inquirerMenu, listarLugares
} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

// console.log(process.env.MAPBOX_KEY);


const main = async () => {

    const busqueda = new Busquedas();

    let opt= '';

    do{
        //Esta función imprime el menú
        opt = await inquirerMenu();
        // console.log({opt});
 
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                // console.log(lugar);

                
                //Buscar la ciudad o lugar
                const lugares = await busqueda.ciudad( termino );
                
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);
                // console.log(lugarSel);

                //Clima
                const clima = await busqueda.climaLugar(lugarSel.lat, lugarSel.lng)
                // console.log(clima);

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Latitud: ',lugarSel.lat);
                console.log('Longitud: ',lugarSel.lng);
                console.log('Temperatura: ', clima.normal);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Como está el clima: ', clima.desc.green);

                
            break;
        
            case 2:
                console.log('Elegiste la opcion 2 :)');
            break;
        
            default:
            break;
        }

        if (opt !== 0) await pausa();

    } while( opt !== 0);


}


main();