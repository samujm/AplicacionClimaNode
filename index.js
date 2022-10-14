import * as dotenv from 'dotenv';
dotenv.config();

import {
    leerInput, pausa, inquirerMenu
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

                const lugares = await busqueda.ciudad( termino );
                console.log(lugares);

                //Buscar la ciudad o lugar

                //Seleccionar el lugar

                //Clima

                //Mostrar resultados

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('Latitud: ',);
                console.log('Longitud: ',);
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);
                
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