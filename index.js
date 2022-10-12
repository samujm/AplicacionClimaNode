import {
    leerInput, pausa, inquirerMenu
} from './helpers/inquirer.js';


const main = async () => {

    let opt= '';

    do{
        //Esta función imprime el menú
        opt = await inquirerMenu();
        console.log({opt});

        switch (opt) {
            case 1:
                console.log('Elegiste la opcion 1 :)');
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